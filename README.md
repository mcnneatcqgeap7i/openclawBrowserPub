# 0 token uses OpenClaw，让您 0 token 养龙虾
# OpenClaw Browser，OpenClaw浏览器，养龙虾专用浏览器
<img width="400" height="400" alt="logo" src="https://github.com/user-attachments/assets/5da89977-1172-4e14-ab11-9a877a2d35ba" />

## 使用截图

<img width="989" height="467" alt="67c4d8807707ed52a47af5d938c31160" src="https://github.com/user-attachments/assets/0ea13c3a-d680-4174-b9f1-059ba5706cdd" />

## 界面截图

<img width="1329" height="497" alt="95407033-e58c-40e2-baf7-65e2ff7fdae2" src="https://github.com/user-attachments/assets/41e85227-3552-4ea6-be39-3a7895a0b97a" />

## 为什么选择 OpenClaw 浏览器？

| 传统(api token) 方式           | OpenClaw浏览器 方式 |
| ------------------ | --------------- |
| 需要购买 API Token | **登录web版就行**    |
| 按收发消息的 Token 计费     | 不产生费用      |
| 速度慢（每次对话都发送会话中的所有消息），**特别耗 Token**  | 速度快（只发送最后的消息），**0 Token**  |

> 建议： 训练时 用OpenClaw浏览器 方式 节约token，正式使用时请使用 api token 方式


## 使用教程

<img width="945" height="1029" alt="image" src="https://github.com/user-attachments/assets/b37cb30c-8dab-4854-8877-db9409b401a7" />


## 支持的平台

| 平台                            | 状态          | 模型                                                 |
| ------------------------------- | ------------- | ---------------------------------------------------- |
| DeepSeek                        | ✅ **已测试** | "deepseek-v4-flash", "deepseek-v4-pro"<br>, "deepseek-v4-flash-thinking", "deepseek-v4-pro-thinking"|
| 小米 MiMo (Xiaomi MiMo)         | ✅ **已测试** | "mimo-v2.5-pro", "mimo-v2.5" |
| GLM Web (智谱清言)              | ✅ **已测试** | "glm-5" |
| Kimi                            | ✅ **已测试** | "kimi2.6", "kimi2.6-thinking"|

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
│  │  其它 Web  开发中...                                               ✅   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

# ......
> AI时代，agent是必须品，token是水电煤......
>> mcnneatcqgeap7i@hotmail.com
