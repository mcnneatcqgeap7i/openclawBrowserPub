### 龙虾浏览器（OpenClawBrowser）：一款 免Token费 的AI智能体。
### 主要功能：
### 1、让AI智能体 免Token费 调用大模型。
### 2、让OpenClaw内嵌化、简单化、便携化。
---
### Lobster Browser (OpenClawBrowser): A Token Fee-Free AI Agent
### Key Features:
### 1. Enables AI agents to call large models with zero Token fees
### 2. Makes OpenClaw embedded, simplified, and portable

---
### 龙虾浏览器：0 Token费 养虾，养马，养一切（OpenClaw,Hermes）！免安装、免配置，双击 即用。
### 免 租服务器，装进 U 盘，随时随地，插上就用。
### 既有云端全能力，更有本地操控权。
### 你的训练成果，全部存进U盘。拔出即带走，插入任何电脑，龙虾立刻带着你的习惯上线
---
### Lobster Browser (OpenClawBrowser): Zero Token Fees — raise lobsters, horses, and everything else (OpenClaw, Hermes)! No installation, no configuration, just double-click to run.
### No need to rent servers. Pack it onto a USB drive — plug in and use anytime, anywhere.
### Full cloud capabilities, plus local control over your machine.
### All your training results are stored on the USB drive. Unplug it and take it with you. Plug into any computer, and your lobster goes live immediately, carrying all your habits and preferences with it.
---
<img width="400" height="400" alt="logo" src="https://github.com/user-attachments/assets/5da89977-1172-4e14-ab11-9a877a2d35ba" />

---
## 使用截图
<img width="989" height="467" alt="67c4d8807707ed52a47af5d938c31160" src="https://github.com/user-attachments/assets/0ea13c3a-d680-4174-b9f1-059ba5706cdd" />

---
## 界面截图
<img width="1295" height="1036" alt="image" src="https://github.com/user-attachments/assets/518601be-f20e-44a1-b687-cd587d6bd0f6" />

---
## 为什么选择 OpenClaw 浏览器？

| 其它智能体方式           | 龙虾浏览器 方式 |
| ------------------ | --------------- |
| 需要购买 API Token | **免 Token 费**    |
| 安装配置复杂| 使用简单、双击既用 |

---

# 详细介绍
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/fb5e188b-63ea-492c-a58f-e42d78c0eca1" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/585cf956-170a-4e00-94d6-f9241cc7c40d" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/8bf54b4b-2f95-4200-8e66-4dbbc078d08d" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/2e0c54f0-407b-475a-913f-ef12acb152f1" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/6f721464-74e0-48a4-bfa3-8293dc75149a" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/a56a455d-8cf0-4c52-b6f1-fc5a04f6605e" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/8a86ec15-d358-4af6-983e-f8cbacd11540" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/441b8cd4-6c36-4fda-8fb6-1ba6abc4a140" />
<img width="1606" height="841" alt="image" src="https://github.com/user-attachments/assets/8c5a73ff-8532-4de9-93bd-f7f77f081ce0" />

---

## 支持平台
| 平台                            | 状态          | 模型                                                 |
| ------------------------------- | ------------- | ---------------------------------------------------- |
| DeepSeek                        | ✅ **已测试** | "deepseek-v4-flash", "deepseek-v4-pro"|
| 小米 MiMo (Xiaomi MiMo)          | ✅ **已测试** | "mimo-v2.5-pro", "mimo-v2.5" |
| Kimi                            | ✅ **已测试** | "kimi2.6" |
| 其它免费平台                      | ✅ **已测试** |  内嵌数十种免费模型 |

## 系统架构

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                              OpenClaw Browser                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐   │
│  │   Web UI    │    │  CLI/TUI    │    │   Gateway   │    │  Channels   │   │
│  │ (control-ui)│    │             │    │  (Port API) │    │ (DingTalk…) │   │
│  └──────┬──────┘    └──────┬──────┘    └──────┬──────┘    └──────┬──────┘   │
│         │                  │                  │                  │          │
│         └──────────────────┴──────────────────┴──────────────────┘          │
│                                    │                                        │
│                           ┌────────▼────────┐                               │
│                           │   Agent Core    │                               │
│                           │  (PI-AI Engine) │                               │
│                           └────────┬────────┘                               │
│                           ┌────────▼────────┐                               │
│                           │ OpenClawBrowser │                               │
│                           │      (Core)     │                               │
│                           └────────┬────────┘                               │
│                                    │                                        │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │  DeepSeek Web                                                    ✅   │  │
│  │  Xiaomi MiMo   Web                                               ✅   │  │
│  │  GLM Web 智谱清言                                                 ✅   │  │
│  │  Kimi Web                                                        ✅   │  │
│  │  其它免费平台（web与api） 持续完善与支持...                           ✅   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

# ......
> AI时代，agent是必须品，token是水电煤......
>> mcnneatcqgeap7i@hotmail.com
