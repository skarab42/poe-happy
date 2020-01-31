const { BrowserWindow } = require("electron");
const store = require("../store");
const path = require("path");

function createWin(name, options = {}) {
  const paths = store.get("paths");
  const win = new BrowserWindow({
    width: 442,
    height: 200,
    show: false,
    frame: false,
    transparent: true,
    minimizable: false,
    maximizable: false,
    alwaysOnTop: true,
    fullscreen: false,
    skipTaskbar: true,
    webPreferences: {
      nodeIntegration: true
    },
    ...options
  });

  win.setIcon(path.join(paths.images, "icon.ico"));
  win.loadFile(path.join(paths.views, `${name}.html`));

  win.on("blur", () => win.hide());

  return win;
}

module.exports = createWin;
