const { BrowserWindow } = require("electron");
const state = require("../state");
const path = require("path");

function createLeagues() {
  state.ui.leagues = new BrowserWindow({
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
  state.ui.leagues.setIcon(path.join(state.paths.images, "icon.ico"));
  state.ui.leagues.loadFile(path.join(state.paths.views, "leagues.html"));
  state.ui.leagues.on("blur", () => state.ui.leagues.hide());
}

module.exports = createLeagues;
