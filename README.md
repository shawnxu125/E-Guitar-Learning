<div align="center">

# 🎸 电吉他学习中心

**从「看着谱子弹」到「听到歌就能弹」**

一套面向华语流行乐的纯 HTML 互动课程 —— 无谱伴奏 · 即兴 Solo · 零依赖离线可用

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Lessons](https://img.shields.io/badge/课程-10课-brightgreen)](index.html)
[![Reference](https://img.shields.io/badge/参考手册-4份-blue)](reference/)
[![Platform](https://img.shields.io/badge/平台-任意浏览器-orange)](#-快速开始)
[![Time](https://img.shields.io/badge/每日练习-30分钟-9cf)](index.html)

</div>

---

## 🎯 这个项目解决什么问题

> 我可以看着谱子弹，但在没有谱的场合（弹唱、Jam、聚会）就完全不知道怎么下手。

这套课程的目标非常明确 —— 学完之后你应该能：

| 能力 | 具体表现 |
|---|---|
| 🎧 **听歌伴奏** | 听到一首没弹过的华语流行歌，听出和弦走向并直接伴奏 |
| 🎤 **弹唱加花** | 伴奏过程中自然加入即兴 fill-in 和小段 solo |
| 🎸 **和弦即兴** | 在 1645 / 4536 等常见进行上弹出一段完整即兴 solo |
| 🎵 **旋律化音阶** | 把五声音阶「玩」出旋律，而不是机械地上下跑音阶 |

**不在范围内**：速弹/金属技巧、爵士和声、古典吉他、效果器调试。

## ✨ 特色

- **纯 HTML，零依赖** —— 双击 `index.html` 即可使用，无需安装任何环境，Windows / Mac / 手机浏览器均可
- **三阶段课程体系** —— 伴奏地基 → 即兴 Solo → 实战整合，十课环环相扣
- **内置交互测验** —— 每课附带 quiz 组件，学完即测
- **进度自动记录** —— localStorage 保存完成状态，自动统计完成课程数 / 当前阶段 / 90 天 Day 估算
- **每课 30 分钟可消化** —— 短小精悍，以一件「你能做到的事」结束
- **中英术语对照** —— 乐理概念中文讲解 + 英文术语标注，方便查资料
- **指板内容逐音核算** —— 所有品位/音名/指法经过人工逐音验证

## 🚀 快速开始

```bash
# 1. 克隆仓库
git clone https://github.com/shawnxu125/E-Guitar-Learning.git

# 2. 打开学习中心（双击也行）
cd E-Guitar-Learning
open index.html        # macOS
start index.html       # Windows
```

首页即学习中心：十课按三阶段分组的卡片导航 + 参考文档区 + 每日 30 分钟练习配方，学完一课打个勾，进度自动保存。

## 📚 课程体系

### 阶段一 · 伴奏地基（无谱伴奏的能力）

| # | 课程 | 你会获得 |
|---|---|---|
| 01 | [级数思维与 1645](lessons/0001-ji-shu-si-wei-yu-1645.html) | 用级数听懂流行歌的骨架 |
| 02 | [CAGED 系统与三音和弦](lessons/0002-caged-san-yin-he-xian.html) | 电吉他伴奏的核心指板布局 |
| 03 | [四大和弦进行](lessons/0003-he-xian-jin-xing-ku.html) | 华语流行万能走向库 |
| 06 | [伴奏节奏手法](lessons/0006-ban-zou-jie-zou-shou-fa.html) | 让吉他听起来"专业" |
| 08 | [听音扒和弦](lessons/0008-ting-yin-ba-he-xian.html) | 无谱伴奏的最后一块拼图 |

### 阶段二 · 即兴 Solo（让吉他唱歌的能力）

| # | 课程 | 你会获得 |
|---|---|---|
| 04 | [五声音阶把位体系](lessons/0004-wu-sheng-yin-jie-ba-wei.html) | Solo 的弹药库 |
| 05 | [和弦内音与目标音](lessons/0005-he-xian-nei-yin-mu-biao-yin.html) | 从"跑音阶"到"弹旋律" |
| 07 | [推弦、揉弦与乐句呼吸](lessons/0007-solo-chang-ge-de-ji-qiao.html) | 让 Solo 开口唱歌 |
| 09 | [蓝调味道](lessons/0009-lan-tiao-wei-dao-yu-wai-zhi-wai.html) | 给 Solo 加一点"脏"的灵魂 |

### 阶段三 · 实战整合

| # | 课程 | 你会获得 |
|---|---|---|
| 10 | [实战路线图](lessons/0010-shi-zhan-lu-xian-tu.html) | 把一切串起来 + 90 天行动计划 |

### 📖 参考手册（随查随用）

| 手册 | 内容 |
|---|---|
| [和弦进行速查表](reference/chord-progressions.html) | 1645 / 4536 / 卡农等常用走向 |
| [指板音名表](reference/fretboard-notes.html) | 标准调弦 0–12 品逐音对照 |
| [五声音阶把位速查表](reference/pentatonic-positions.html) | 五个把位一图掌握 |
| [节奏型速查表](reference/rhythm-patterns.html) | 常用伴奏节奏型 |

## 🗂 项目结构

```
E-Guitar-Learning/
├── index.html              # 🏠 学习中心（入口，含进度追踪）
├── assets/
│   ├── style.css           # 统一样式
│   └── quiz.js             # 课内交互测验组件
├── lessons/                # 十课完整课程（HTML）
├── reference/              # 四份速查参考手册
├── learning-records/       # 学习记录（内容校准依据）
├── MISSION.md              # 学习目标与边界
├── NOTES.md                # 教学约定与进度追踪
└── RESOURCES.md            # 外部学习资源精选
```

## ⏱ 每日 30 分钟怎么练

学习中心内置练习配方，核心思路：

```
 5 min   热身     指体操 + 上个把位音阶慢跑
15 min   主课     当前课程的一个实操步骤
10 min   应用     用当天内容弹一首真实流行歌
```

## 🤝 适合谁

- ✅ 能流畅换和弦、识谱、懂音程与大小调概念
- ✅ 想脱离谱子弹唱 / Jam / 聚会即兴
- ✅ 每天能挤出约 30 分钟
- ❌ 零基础（需要先补基本和弦与右手基本功）
- ❌ 想学速弹、扫拨、爵士和声

## 📄 License

[MIT](LICENSE) © 2026 shawnxu125

---

<div align="center">

**🎸 听到一首歌，手上就有答案。**

如果这个项目帮到了你，欢迎点个 ⭐ Star

</div>
