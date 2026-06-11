### OpenClaw browser: 0 Token lobster! Installation free, configuration free, double click ready to use.
### A rent free server can be inserted into a USB flash drive and used anytime, anywhere.
### It has full cloud capabilities and local control.
### All your training results are saved in USB flash drive. Pull it out and take it away, plug it into any computer, and lobster will bring your habit online immediately
### OpenClaw 浏览器：0 Token 养虾，养马，养一切（OpenClaw,Hermes,Qwenpaw）！免安装、免配置，双击 即用。
### 免 租服务器，装进 U 盘，随时随地，插上就用。
### 既有云端全能力，更有本地操控权。
### 你的训练成果，全部存进U盘。拔出即带走，插入任何电脑，龙虾立刻带着你的习惯上线
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

<img width="1361" height="980" alt="image" src="https://github.com/user-attachments/assets/bdecd538-1bad-4c57-b9f4-6763625f8084" />





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



## 支持平台
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
