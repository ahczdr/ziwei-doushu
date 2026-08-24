# P6：Critic / Evaluation

## 状态

实现完成，等待本分支 CI 验证。

## 已实现

- claim 级事实 ID 校验。
- claim 级古籍 citation ID 校验。
- grounded claim ratio。
- citation reference precision。
- 宿命化绝对措辞检测。
- 健康文化主题医学诊断/治疗越界检测。
- 明确健康非医学边界声明检查。
- Critic score / errors / warnings。
- 最多一次的受控修订循环，避免无限自我调用。
- 固定评测汇总接口。

## 原则

Critic 不判断紫微斗数是否具有科学预测效力；它检查的是系统内部是否忠实引用确定性命盘事实、程序化格局规则和实际检索到的古籍段落，以及是否越过产品安全边界。

## 下一阶段

P7：服务端 API + Web AI 面板 + 端到端 MVP。
