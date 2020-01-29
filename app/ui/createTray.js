const { Tray, Menu } = require("electron");
const showLeagues = require("./showLeagues");
const showAbout = require("./showAbout");
const state = require("../state");
const i18n = require("../i18n");
const path = require("path");

function createTray() {
  state.ui.tray = new Tray(path.join(state.paths.images, "icon.ico"));
  state.ui.trayMenu = Menu.buildFromTemplate([
    { label: state.app.title, enabled: false },
    { type: "separator" },
    { label: i18n.__("Leagues"), click: showLeagues },
    { type: "separator" },
    { label: i18n.__("About"), click: showAbout },
    { label: i18n.__("Quit"), role: "quit" }
  ]);
  state.ui.tray.setTitle(state.app.title);
  state.ui.tray.setToolTip(state.app.title);
  state.ui.tray.setContextMenu(state.ui.trayMenu);
  state.ui.tray.on("click", () => {
    state.ui.tray.popUpContextMenu();
  });
}

module.exports = createTray;
