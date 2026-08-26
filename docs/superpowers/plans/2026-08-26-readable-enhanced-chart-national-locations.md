# 增强盘可读性与全国三级出生地实施计划

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 将增强盘全部主要文字提升到可读基线，并为全国出生地提供离线、带县区中心经度的省—市—县/区三级联动。

**Architecture:** 将行政区划名称、代码和中心经度编译成仓库内的精简树形快照，前端只使用静态数据，不在运行时调用地图或地理编码 API。`BirthForm` 只负责三级联动和表单校验，`BirthInfo` 和共享/标准盘桥接保持县区字段可选。增强盘的字号改动限定在命盘页面和其直接子组件。

**Tech Stack:** Next.js 15, React 19, TypeScript, Tailwind utility classes, Framer Motion, Node.js 22 ESM scripts, Node test runner via `tsx`.

---

## 文件边界

- Create: `scripts/generate-location-data.mjs` — 从固定版本数据源生成精简地址树。
- Create: `lib/ziwei/location-data.ts` — 提供类型和生成的静态数据。
- Modify: `lib/ziwei/cities.ts` — 保留旧导出名称，改为从新数据树适配旧的省市访问。
- Modify: `lib/ziwei/types.ts`, `lib/ziwei/share.ts`, `lib/ziwei-ai/ui-chart/react-iztro-view-model.ts` — 传递县区与行政区代码。
- Modify: `components/BirthForm.tsx`, `components/ZiweiAiBirthForm.tsx` — 三级联动、校验和精度展示。
- Modify: `components/ChartBoard.tsx`, `components/PalaceCell.tsx`, `components/TimeNav.tsx`, `components/InsightPanel.tsx`, `app/chart/page.tsx` — 增强盘字号、间距和响应式布局。
- Modify: `components/ShareModal.tsx`, `components/ShareCardCanvas.tsx` — 共享数据兼容县区。
- Create: `lib/ziwei/__tests__/locations.test.ts`, `lib/ziwei/__tests__/share.test.ts` — 地址数据和共享参数回归。
- Modify: `lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts` — 县区地址传递和经度回归。

### Task 1: 生成全国三级地址快照

**Files:**
- Create: `scripts/generate-location-data.mjs`
- Create: `lib/ziwei/location-data.ts`
- Modify: `lib/ziwei/cities.ts`
- Create: `lib/ziwei/__tests__/locations.test.ts`
- Modify: `package.json`

- [ ] **Step 1: 先写失败的数据契约测试**

  测试应当前快照导出的树满足以下条件：

  ```ts
  import test from 'node:test';
  import assert from 'node:assert/strict';
  import { LOCATION_PROVINCES, findLocation } from '../location-data';

  test('national location snapshot contains Anhui -> Chizhou -> Guichi', () => {
    const chizhou = findLocation(['安徽省', '池州市']);
    assert.ok(chizhou);
    assert.equal(chizhou.name, '池州市');
    assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.name, '贵池区');
    assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.level, 'district');
    assert.equal(findLocation(['安徽省', '池州市', '贵池区'])?.longitude, 117.488342);
  });

  test('snapshot has complete parent links and finite east longitudes', () => {
    assert.equal(LOCATION_PROVINCES.length, 34);
    for (const province of LOCATION_PROVINCES) {
      assert.ok(province.code);
      assert.ok(province.name);
      for (const city of province.children) {
        assert.equal(city.parentCode, province.code);
        for (const district of city.children) {
          assert.equal(district.parentCode, city.code);
          assert.ok(Number.isFinite(district.longitude));
          assert.ok(district.longitude >= 73 && district.longitude <= 136);
        }
      }
    }
  });
  ```

- [ ] **Step 2: 运行测试确认现有快照不满足**

  Run: `npx tsx --test lib/ziwei/__tests__/locations.test.ts`

  Expected: FAIL because `location-data.ts` and the county-level nodes do not yet exist.

- [ ] **Step 3: 实现固定版本生成器和静态数据**

  `scripts/generate-location-data.mjs` 必须从固定 commit 的 `info.json` 读取节点，将每个节点转换为 `{ code, name, level, parentCode, longitude, children }`，经度优先取 `center[0]`，缺失时取 `centroid[0]`，两者都缺失时让脚本失败。输出的 `location-data.ts` 必须带有来源 URL、commit SHA 和生成日期注释。根节点只保留省级子节点，不把县级以下的乡镇、村级数据放进包体。为直辖市或省直辖县级单位创建稳定的虚拟市级分组，名称分别使用直辖市名称和“省直辖县级行政区划”。

  `lib/ziwei/cities.ts` 保留 `PROVINCES` 导出，将新树转换为兼容形式：`ProvinceInfo { name, code, longitude, cities }` 与 `CityInfo { name, code, longitude, districts }`。

- [ ] **Step 4: 重新运行数据契约测试**

  Run: `npx tsx --test lib/ziwei/__tests__/locations.test.ts`

  Expected: PASS, including the exact Guichi center longitude and all 34 province nodes.

- [ ] **Step 5: 提交独立数据快照变更**

  ```bash
  git add scripts/generate-location-data.mjs lib/ziwei/location-data.ts lib/ziwei/cities.ts lib/ziwei/__tests__/locations.test.ts package.json
  git commit -m "feat: add national county location snapshot"
  ```

### Task 2: 传递县区字段并保持兼容

**Files:**
- Modify: `lib/ziwei/types.ts`
- Modify: `lib/ziwei/share.ts`
- Modify: `lib/ziwei-ai/ui-chart/react-iztro-view-model.ts`
- Modify: `lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts`
- Create: `lib/ziwei/__tests__/share.test.ts`
- Modify: `components/ShareModal.tsx`
- Modify: `components/ShareCardCanvas.tsx`

- [ ] **Step 1: 先写县区传递与分享参数测试**

  Add tests that assert `BirthInfo.district`, `BirthInfo.locationCode`, `birthInfoToChartInput().birthplace` and share params use `di`/`dc` without changing the existing day parameter `d`:

  ```ts
  test('birth input preserves district and location code', () => {
    const info = { year: 2000, month: 8, day: 16, hour: 2, gender: 'female' as const,
      province: '安徽省', city: '池州市', district: '贵池区', locationCode: '341702', longitude: 117.488342 };
    const input = birthInfoToChartInput(info);
    assert.equal(input.birthplace, '安徽省 / 池州市 / 贵池区');
    assert.equal(input.longitude, 117.488342);
  });
  ```

- [ ] **Step 2: 运行测试确认字段尚未传递**

  Run: `npx tsx --test lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts lib/ziwei/__tests__/share.test.ts`

  Expected: FAIL because `BirthInfo` and share conversion currently only include province/city.

- [ ] **Step 3: 实现字段与兼容参数**

  Add optional `district` and `locationCode` to `BirthInfo`; include district in `birthInfoToChartInput` birthplace; include `di` and `dc` in `formToSearchParams` and parse them in `searchParamsToForm`; add district to `BirthFormState` and share card props while treating missing district as a legacy city-level input.

- [ ] **Step 4: 运行测试确认通过**

  Run: `npx tsx --test lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts lib/ziwei/__tests__/share.test.ts`

  Expected: PASS with old two-level fixtures still passing and the new three-level fixture preserving the exact birthplace string.

- [ ] **Step 5: 提交桥接变更**

  ```bash
  git add lib/ziwei/types.ts lib/ziwei/share.ts lib/ziwei-ai/ui-chart/react-iztro-view-model.ts lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts lib/ziwei/__tests__/share.test.ts components/ShareModal.tsx components/ShareCardCanvas.tsx
  git commit -m "feat: carry county location through chart inputs"
  ```

### Task 3: BirthForm 三级联动与精度校验

**Files:**
- Modify: `components/BirthForm.tsx`
- Modify: `components/ZiweiAiBirthForm.tsx`
- Modify: `lib/ziwei/__tests__/locations.test.ts`

- [ ] **Step 1: 写表单行为回归断言**

  Extend the existing data-level tests with these pure behavior assertions: selecting `安徽省` yields no selected city/district; selecting `池州市` yields no selected district; selecting `贵池区` returns `117.488342`; changing province or city clears descendants; an old city-only initial value remains accepted as legacy city precision.

- [ ] **Step 2: 运行回归确认现状态不满足**

  Run: `npx tsx --test lib/ziwei/__tests__/locations.test.ts`

  Expected: FAIL until the form reads `districts`, clears descendants, and chooses the district longitude.

- [ ] **Step 3: 实现三级联动**

  Replace the current two-select location block with three selects driven by `PROVINCES`, `cityList`, and `districtList`. `handleProvince` sets `{ province, city: '', district: '', locationCode: '', longitude: province.longitude }`; `handleCity` sets `{ city, district: '', locationCode: '', longitude: city.longitude }`; `handleDistrict` stores district name/code and district longitude. A selected province/city without a district is marked `city-level` legacy precision only when loaded from an old share value; newly changed selections show a field error and cannot submit until the third level is selected. The summary line must render `省 / 市 / 县区` and a visible precision label (`县区中心` or `市级估算`).

- [ ] **Step 4: 运行表单与类型测试**

  Run: `npm run typecheck` and `npx tsx --test lib/ziwei/__tests__/locations.test.ts lib/ziwei/__tests__/share.test.ts lib/ziwei-ai/ui-chart/__tests__/react-iztro-view-model.test.ts`

  Expected: PASS with no TypeScript errors and complete Chizhou/Guichi data in the submit payload.

- [ ] **Step 5: 提交表单变更**

  ```bash
  git add components/BirthForm.tsx components/ZiweiAiBirthForm.tsx lib/ziwei/__tests__/locations.test.ts
  git commit -m "feat: add national province city district selection"
  ```

### Task 4: 增强盘全局可读排版

**Files:**
- Modify: `app/chart/page.tsx`
- Modify: `components/ChartBoard.tsx`
- Modify: `components/PalaceCell.tsx`
- Modify: `components/TimeNav.tsx`
- Modify: `components/InsightPanel.tsx`
- Modify: `app/globals.css` only if a scoped responsive rule cannot be expressed in existing classes

- [ ] **Step 1: 写界面契约测试**

  Add a source contract test that asserts enhanced chart uses `maxWidth: 1500`, AI panel width `440`, AI body class `text-[15px] leading-[1.8]`, palace auxiliary text at least `text-[11px]`, and a breakpoint rule switches the two columns to one column at `1100px`.

- [ ] **Step 2: 运行测试确认现有字号过小**

  Run: `npm run test:p7`

  Expected: FAIL because current source still contains the 380px panel, 11px AI body and 8–10px palace labels.

- [ ] **Step 3: 实现统一字号与布局**

  Apply these exact baselines: `app/chart/page.tsx` main max width `1500px`, AI grid track `440px`, gap `24px`; `ChartBoard` title 12/16px and legend 12px; `PalaceCell` min height `104px`, palace name 13px, ganzhi/secondary stars 11px, major stars 14px, badges 10px; `TimeNav` tabs and year controls 13px with 36px minimum row height; `InsightPanel` topic controls 13px, section titles 15px, body `15px` with line-height `1.8`, input 14px. Add a scoped media rule at `max-width: 1100px` to use one column and at `max-width: 640px` to reduce page gutters to 12px while keeping the same minimum readable text sizes.

- [ ] **Step 4: 运行类型、契约和构建检查**

  Run: `npm run typecheck`, `npm run test:p7`, and `npm run build`.

  Expected: PASS; the build output must still include `/chart` and `/api/ziwei-ai/interpret`.

- [ ] **Step 5: 提交排版变更**

  ```bash
  git add app/chart/page.tsx components/ChartBoard.tsx components/PalaceCell.tsx components/TimeNav.tsx components/InsightPanel.tsx app/globals.css lib/ziwei-ai/platform/__tests__/insight-panel-contract.test.ts
  git commit -m "feat: improve enhanced chart readability"
  ```

### Task 5: 全量回归与浏览器验收

**Files:**
- No new source files; use all changed files from Tasks 1–4.

- [ ] **Step 1: 运行全量测试**

  Run: `npm run typecheck; npm run test:ziwei-ai; npm run build; npm run smoke:production`

  Expected: all commands exit 0; P1–P12 report zero failures.

- [ ] **Step 2: 启动本地生产浏览器**

  Run: `npm run build` then `npm run start -- -p 3101` in a local terminal session.

  Open `http://127.0.0.1:3101/chart` with agent-browser and verify at 1440px, 1024px, and 375px viewport widths.

- [ ] **Step 3: 执行全国三级地点路径**

  In the birth form select `安徽省 → 池州市 → 贵池区`, verify the summary shows all three names, the precision label says `县区中心`, and the longitude is `117.488342°E`. Submit and verify the chart header/standard view receives `安徽省 / 池州市 / 贵池区`.

- [ ] **Step 4: 执行增强盘可读性检查**

  Verify no horizontal page scroll at 1440px or 1024px, the two-column layout switches to one column at 1024px, AI body is visually readable at 15px, and the 375px view keeps the three selects and submit button visible without overlap. Run a browser evaluation that checks `document.documentElement.scrollWidth <= window.innerWidth` and captures screenshots for 1440px and 375px.

- [ ] **Step 5: 执行最终 Git 检查**

  ```bash
  git diff --check
  git status --short
  git log -5 --oneline
  ```

  Expected: no whitespace errors, only intentional commits, and a clean working tree before PR creation.

