# 0 token uses OpenClaw，让您 0 token 养龙虾
# OpenClaw Browser，OpenClaw浏览器，养龙虾专用浏览器
<img width="400" height="400" alt="logo" src="https://github.com/user-attachments/assets/5da89977-1172-4e14-ab11-9a877a2d35ba" />

## 使用截图

<img width="989" height="467" alt="67c4d8807707ed52a47af5d938c31160" src="https://github.com/user-attachments/assets/0ea13c3a-d680-4174-b9f1-059ba5706cdd" />

## 界面截图

<img width="1329" height="497" alt="95407033-e58c-40e2-baf7-65e2ff7fdae2" src="https://github.com/user-attachments/assets/41e85227-3552-4ea6-be39-3a7895a0b97a" />

## 为什么选择 OpenClaw 浏览器？

| 传统方式           | OpenClaw 浏览器 方式 |
| ------------------ | --------------- |
| 需要购买 API Token | **登录web版就行**    |
| 按调用次数计费     | 无使用限制      |

## 使用教程

### 1. 登录标签中的模型供应商
- 在OpenClaw浏览器中，切换到DeepSeek、Kimi、小米等标签页，登录对应的账号。
- 如果在OpenClaw中不使用相应供应商的模型，可不用登录。
> 建议都登录，多个备选。
### 2. 配置OpenClaw中的模型
在OpenClaw的配置文件中，参考以下示例。添加models，model，openai-router部分内容：
```
...,   

  "models": {
    "mode": "merge",
    "providers": {
      "openai-router": {
        "baseUrl": "http://127.0.0.1:18888/v1",
        "apiKey": "第一步中配置的API Key，复制到此处，否则无法使用",
        "api": "openai-completions",
        "models": [
          {
            "id": "deepseek-v4-flash",
            "name": "deepseek-v4-flash"
          },
          {
            "id": "deepseek-v4-pro",
            "name": "deepseek-v4-pro"
          },
          {
            "id": "deepseek-v4-flash-thinking",
            "name": "deepseek-v4-flash-thinking"
          },
          {
            "id": "deepseek-v4-pro-thinking",
            "name": "deepseek-v4-pro-thinking"
          },
          {
            "id": "mimo-v2.5",
            "name": "mimo-v2.5"
          },
          {
            "id": "mimo-v2.5-pro",
            "name": "mimo-v2.5-pro"
          },
          {
            "id": "GLM-5",
            "name": "GLM-5"
          },
          {
            "id": "kimi2.6",
            "name": "kimi2.6"
          },
          {
            "id": "kimi2.6-thinking",
            "name": "kimi2.6-thinking"
          }
        ]
      }
    }
  }
  ,...

  agents: {
    defaults: {
      model: {
        primary: "openai-router/deepseek-v4-flash"
      },
      models: {
        "openai-router/deepseek-v4-flash": { alias: "deepseek-v4-flash-快速模式" },
        "openai-router/deepseek-v4-flash-thinking": { alias: "deepseek-v4-flash-thinking-快速思考模式" },
        "openai-router/deepseek-v4-pro": { alias: "deepseek-v4-pro-专家模式" },
        "openai-router/deepseek-v4-pro-thinking": { alias: "deepseek-v4-pro-thinking-专家思考模式" },
        "openai-router/mimo-v2.5": { alias: "mimo-v2.5-小米全模态" },
        "openai-router/mimo-v2.5-pro": { alias: "mimo-v2.5-pro-小米旗舰" },
        "openai-router/GLM-5": { alias: "GLM-5-智普清言" },
        "openai-router/kimi2.6": { alias: "kimi2.6-快速" },
        "openai-router/kimi2.6-thinking": { alias: "kimi2.6-思考" },
      },
    },
  },

  ...,
```
### 3. 切换对应模型
在OpenClaw的聊天窗口中，使用命令切换模型：
```
/model openai-router/deepseek-v4-flash
```
或：
```
/model openai-router/mimo-v2.5
```
可用模型：
```
openai-router/deepseek-v4-flash
openai-router/deepseek-v4-pro
openai-router/deepseek-v4-flash-thinking
openai-router/deepseek-v4-pro-thinking
openai-router/mimo-v2.5
openai-router/mimo-v2.5-pro
openai-router/glm-5
openai-router/kimi2.6
openai-router/kimi2.6-thinking
```
> 注意：确保代理服务已启动，并且代理地址与配置的baseUrl一致。

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
