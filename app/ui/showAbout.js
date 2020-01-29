const state = require("../state");
const i18n = require("../i18n");

function showAbout() {
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

module.exports = showAbout;
