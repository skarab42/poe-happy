const { Tray, Menu } = require("electron");
const state = require("../state");
const i18n = require("../i18n");
const path = require("path");

function createTray() {
  state.ui.tray = new Tray(path.join(state.paths.images, "icon.ico"));
  state.ui.trayMenu = Menu.buildFromTemplate([
    { label: state.app.title, enabled: false },
    { type: "separator" },
    {
      label: i18n.__("About"),
      click() {
        const title = `${i18n.__("About2")} ${state.app.name}`;
        state.ui.about.webContents.send("title", title);
        state.ui.about.webContents.send("items", [
          { label: i18n.__("Version"), value: state.app.version },
          { label: i18n.__("License"), value: state.app.license },
          { label: i18n.__("Author"), value: state.app.author },
          { label: i18n.__("Source"), value: state.app.homepage, link: true }
        ]);
        state.ui.about.show();
      }
    },
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
