# 📝 Todo Application 🚀

Welcome to the **Todo Application** built with **Electron.js**! This is a simple desktop application to manage your tasks. 🎯

---

## 🛠️ Prerequisites

Before running the application, ensure you have the following installed:

- **Node.js** (v20.x or higher) 🟢
- **npm** (usually comes with Node.js) 📦
- **Git** (optional, for cloning the repository) 🐙

---

## Features

- Global shortcut (Win+Alt+N) to show/hide the app
- Always-on-top window that makes easily accessible
- Add, complete, and delete tasks
- Task persistence between app restarts
- Draggable window

## 🚀 Getting Started

Follow these steps to set up and run the Todo Application on your local machine:

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/ManishTirkey/Todo-Application.git
```

## Installation

2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npm start
   ```
## :ship: Building for Production

To build the app for production:

```
npm install electron-builder --save-dev
```

Add to package.json:

```json

  "build": {
    "appId": "com.electron.todo-app",
    "productName": "Todo App",
    "copyright": "copyright  © 2025 by ",
    "win": {
      "target": [
        "nsis"
      ],
      "icon": "ICON_PATH",
      "publisherName": "PUBLISHER_NAME"
    },
    "nsis": {
      "runAfterFinish": true,
      "createDesktopShortcut": false,
      "createStartMenuShortcut": true,
      "shortcutName": "To-do App",
      "oneClick": false,
      "installerIcon": "INSTALLER_ICON_PATH",
      "installerHeaderIcon": "INSTALLERHEADER_ICON_PATH",
      "uninstallerIcon": "UNINSTALLER_ICON_PATH",
      "uninstallDisplayName": "To-do App",
      "license": "LICENSE_FILE_NAME",
      "allowToChangeInstallationDirectory": true,
      "deleteAppDataOnUninstall": true
    },
    "mac": {
      "target": "dmg",
      "icon": "ICO_ICON_PATH"
    },
    "linux": {
      "target": "AppImage",
      "icon": "ICO_ICON_PATH"
    }
  }
```

Then run:

```
npm run build
```

## :motorcycle: Other Repositories

- [Face-Recognition-for-Attendance `CustomTkinter`](https://github.com/ManishTirkey/Face-Recognition-for-Attendance.git)
- [Youtube Video Download App](https://github.com/ManishTirkey/Download_youtube_Videos)
  - Both Audio and video separately.
- [Control Volume with hand Gesture](https://github.com/ManishTirkey/Volume_control_opencv)
- [Screenshot Application](https://github.com/ManishTirkey/ScreenShot)
  - ElectonJS and python based Screenshot Application.
  - window sticks on top of window application.
  - Take screenshots of the particular area.

## License

MIT
