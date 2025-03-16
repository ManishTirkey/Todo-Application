const {
  app,
  BrowserWindow,
  globalShortcut,
  ipcMain,
  screen,
  Tray,
  Menu,
  Notification,
} = require("electron");
const path = require("path");
const Store = require("electron-store");

const store = new Store();
let win = null;
let tray = null;
let notification = null;

function createWindow() {
  // Create the browser window
  win = new BrowserWindow({
    width: 250,
    height: 450,
    frame: false,
    transparent: true,
    opacity: 0.95,
    resizable: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });

  // app-stated notification
  notification = new Notification({
    title: "App State",
    subtitle: "Subtitle ",
    body: "App is Ready to launch",
  });

  // Load the index.html file
  win.loadFile("index.html");

  // DevTools
  // win.webContents.openDevTools({ mode: "detach" });

  win.hookWindowMessage(0x007b, () => {
    return true;
  });

  win.webContents.on("context-menu", (event) => {
    event.preventDefault();
  });

  // window listening

  win.on("close", () => {
    win = null;
  });

  win.on("closed", () => {
    win = null;
  });
}

function createTray() {
  // You'll need to add an icon.png file in the assets/icons directory
  tray = new Tray(path.join(__dirname, "assets", "icons", "icon.png"));

  const contextMenu = Menu.buildFromTemplate([
    { label: "Show/Hide Windows", click: toggleWindowsVisibility },
    { type: "separator" },
    {
      label: "Quit",
      click: () => {
        app.isQuitting = true;
        app.quit();
      },
    },
  ]);

  tray.setToolTip("Todo App");
  tray.setContextMenu(contextMenu);

  // Optional: Show window on tray click
  tray.on("click", toggleWindowsVisibility);
}

function toggleWindowsVisibility() {
  // If no windows, create one
  if (win && !win.isVisible()) win.show();
  else if (win && win.isVisible()) win.hide();
  else {
    createWindow();
    win.show();
  }

  return;
}

app.whenReady().then(() => {
  createWindow();
  createTray();

  // Register the global shortcut (Win+Alt+N)
  globalShortcut.register("Alt+Super+N", toggleWindowsVisibility);

  if (notification) notification.show();

  ipcMain.on("close-window", (event) => {
    win.close();
  });
});

// Store tasks when updated
ipcMain.on("save-tasks", (event, tasks) => {
  store.set("tasks", tasks);
});

// Load tasks when requested
ipcMain.handle("load-tasks", async () => {
  return store.get("tasks", []);
});

// Set the app to start at login
app.setLoginItemSettings({
  openAtLogin: true,
  openAsHidden: true,
});

// Proper app quit handling
app.on("before-quit", () => {
  app.isQuitting = true;
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") app.quit();
});

app.on("will-quit", () => {
  // Unregister all shortcuts
  globalShortcut.unregisterAll();

  // Destroy tray
  if (tray) tray.destroy();
});
