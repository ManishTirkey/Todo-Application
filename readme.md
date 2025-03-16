# Modern Todo App with Electron

A sleek, minimal todo app built with Electron.js featuring a modern glassy UI with dotted grid background.

## Features

- Global shortcut (Win+Alt+N) to show/hide the app
- Always-on-top window that's easily accessible
- Modern glass-like UI with rounded corners and subtle dotted grid background
- Add, edit, complete, and delete tasks
- Task persistence between app restarts
- Draggable window

## Installation

1. Clone this repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npm start
   ```

## Usage

- Press `Win+Alt+N` to show/hide the app
- Click the + button to add a new task
- Type your task and press Enter or click Add
- Click the checkbox to mark a task as complete
- Click the pencil icon to edit a task
- When a task is completed, a delete button appears to remove it
- The app stays in the background until summoned with the shortcut

## Building for Production

To build the app for production:

```
npm install electron-builder --save-dev
```

Add to package.json:

```json
"build": {
  "appId": "com.yourname.todo-app",
  "productName": "Todo App",
  "directories": {
    "output": "dist"
  },
  "win": {
    "target": "nsis"
  },
  "mac": {
    "target": "dmg"
  },
  "linux": {
    "target": "AppImage"
  }
},
"scripts": {
  "start": "electron .",
  "build": "electron-builder"
}
```

Then run:

```
npm run build
```

## License

MIT
