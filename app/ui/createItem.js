const { BrowserWindow } = require("electron");
const state = require("../state");
const path = require("path");

function createItem() {
  state.ui.item = new BrowserWindow({
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
    }
  });
  state.ui.item.setIcon(path.join(state.paths.images, "icon.ico"));
  state.ui.item.loadFile(path.join(state.paths.views, "item.html"));
  state.ui.item.on("blur", () => state.ui.item.hide());
}

module.exports = createItem;
