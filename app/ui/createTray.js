const { Tray, Menu } = require("electron");
const state = require("../state");
const path = require("path");

function createTray() {
  state.ui.tray = new Tray(path.join(state.paths.images, "icon.ico"));
  state.ui.trayMenu = Menu.buildFromTemplate([
    { label: state.app.title, enabled: false },
    { type: "separator" },
    { role: "viewMenu", visible: state.debug },
    { type: "separator", visible: state.debug },
    {
      label: "About",
      click() {
        state.ui.about.show();
      }
    },
    { label: "Quit", role: "quit" }
  ]);
  state.ui.tray.setTitle(state.app.title);
  state.ui.tray.setToolTip(state.app.title);
  state.ui.tray.setContextMenu(state.ui.trayMenu);
  state.ui.tray.on("click", () => {
    state.ui.tray.popUpContextMenu();
  });
}

module.exports = createTray;
