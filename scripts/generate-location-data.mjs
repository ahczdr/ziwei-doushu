import { writeFile } from 'node:fs/promises';

const SOURCE_COMMIT = '7aa2c5fabc6a892015625898c3482874b233f9de';
const SOURCE_URL = `https://raw.githubusercontent.com/zhChuXiao/ChinaGeoJson/${SOURCE_COMMIT}/info.json`;
const OUTPUT = new URL('../lib/ziwei/location-data.ts', import.meta.url);

const raw = await fetch(SOURCE_URL).then(async (response) => {
  if (!response.ok) throw new Error(`location source failed: HTTP ${response.status}`);
  return response.json();
});

const nodeByCode = (code) => raw[String(code)];
const longitudeOf = (node) => {
  const longitude = node?.center?.[0] ?? node?.centroid?.[0];
  if (!Number.isFinite(longitude)) throw new Error(`missing longitude for ${node?.name ?? node?.adcode}`);
  return Number(longitude.toFixed(6));
};

const compactNode = ({ code, name, level, parentCode, longitude, children = [] }) => ({
  code: String(code),
  name,
  level,
  ...(parentCode ? { parentCode: String(parentCode) } : {}),
  longitude,
  children,
});

function districtNode(rawDistrict, parentCode) {
  return compactNode({
    code: rawDistrict.adcode,
    name: rawDistrict.name,
    level: 'district',
    parentCode,
    longitude: longitudeOf(rawDistrict),
  });
}

function cityNode(rawCity, provinceCode) {
  const city = nodeByCode(rawCity.adcode) ?? rawCity;
  const districts = (city.children ?? []).filter(child => child.level === 'district').map(child => districtNode(child, rawCity.adcode));
  const fallbackDistricts = districts.length > 0
    ? districts
    : [districtNode({ ...rawCity, adcode: `${rawCity.adcode}-self` }, rawCity.adcode)];
  return compactNode({
    code: rawCity.adcode,
    name: rawCity.name,
    level: 'city',
    parentCode: provinceCode,
    longitude: longitudeOf(rawCity),
    children: fallbackDistricts,
  });
}

function provinceNode(rawProvince) {
  const province = nodeByCode(rawProvince.adcode) ?? rawProvince;
  const provinceCode = String(rawProvince.adcode);
  const children = province.children ?? [];
  const cityChildren = children.filter(child => child.level === 'city').map(child => cityNode(child, provinceCode));
  const directDistricts = children.filter(child => child.level === 'district').map(child => districtNode(child, `${provinceCode}-direct`));
  if (directDistricts.length > 0) {
    cityChildren.push(compactNode({
      code: `${provinceCode}-direct`,
      name: province.name.endsWith('市') ? province.name : '省直辖县级行政区划',
      level: 'city',
      parentCode: provinceCode,
      longitude: longitudeOf(province),
      children: directDistricts,
    }));
  }
  if (cityChildren.length === 0) {
    cityChildren.push(compactNode({
      code: `${provinceCode}-self`,
      name: province.name,
      level: 'city',
      parentCode: provinceCode,
      longitude: longitudeOf(province),
      children: [districtNode({ ...province, adcode: `${provinceCode}-self-district` }, `${provinceCode}-self`)],
    }));
  }
  return compactNode({
    code: provinceCode,
    name: province.name,
    level: 'province',
    longitude: longitudeOf(province),
    children: cityChildren,
  });
}

const provinces = (nodeByCode(100000)?.children ?? []).map(provinceNode);
if (provinces.length !== 34) throw new Error(`expected 34 provinces, received ${provinces.length}`);

const output = `/* Generated from ${SOURCE_URL} on ${new Date().toISOString().slice(0, 10)}. Do not edit by hand. */
export type LocationLevel = 'province' | 'city' | 'district';

export interface LocationNode {
  code: string;
  name: string;
  level: LocationLevel;
  parentCode?: string;
  longitude: number;
  children: LocationNode[];
}

export const LOCATION_SOURCE = {
  url: '${SOURCE_URL}',
  commit: '${SOURCE_COMMIT}',
} as const;

export const LOCATION_PROVINCES: LocationNode[] = ${JSON.stringify(provinces, null, 2)};

export function findLocation(path: readonly string[]): LocationNode | undefined {
  let nodes = LOCATION_PROVINCES;
  let current;
  for (const name of path) {
    current = nodes.find(node => node.name === name);
    if (!current) return undefined;
    nodes = current.children;
  }
  return current;
}
`;

await writeFile(OUTPUT, output, 'utf8');
console.log(`Wrote ${provinces.length} provinces to ${OUTPUT.pathname}`);
