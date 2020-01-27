const { BrowserWindow } = require("electron");
const state = require("../state");
const path = require("path");

function createAbout() {
  state.ui.about = new BrowserWindow({
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
  state.ui.about.setIcon(path.join(state.paths.images, "icon.ico"));
  state.ui.about.loadFile(path.join(state.paths.views, "about.html"));
  state.ui.about.on("blur", () => state.ui.about.hide());
}

module.exports = createAbout;
