const { Tray, Menu } = require("electron");
const store = require("../store");
const i18n = require("../i18n");
const path = require("path");

function createTray() {
  const app = store.get("app");
  const paths = store.get("paths");
  const tray = new Tray(path.join(paths.images, "icon.ico"));
  const menu = Menu.buildFromTemplate([
    { label: app.title, enabled: false },
    { type: "separator" },
    {
      label: i18n.__("Leagues"),
      click() {
        require("./showLeagues")();
      }
    },
    { type: "separator" },
    {
      label: i18n.__("About"),
      click() {
        require("./showAbout")();
      }
    },
    { label: i18n.__("Quit"), role: "quit" }
  ]);

  tray.setContextMenu(menu);
  tray.setTitle(app.title);
  tray.setToolTip(app.title);
  tray.on("click", () => {
    tray.popUpContextMenu();
  });

  return tray;
}

module.exports = createTray;
