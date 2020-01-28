const { app, dialog } = require("electron");
const state = require("../state");
const i18n = require("../i18n");
const path = require("path");
const fs = require("fs");

const docsPath = app.getPath("documents");
const gamePath = path.join(docsPath, "My Games", "Path of Exile");

function error(message) {
  dialog.showErrorBox("Oups !", message);
  app.quit();
}

function _getGameLanguage(file) {
  try {
    const iniFile = path.join(gamePath, file);
    const contents = fs.readFileSync(iniFile, "utf8");
    const matches = contents.match(/language=(.*)/);
    return matches ? matches[1] : null;
  } catch (e) {
    return null;
  }
}

function getGameLanguage() {
  if (!fs.existsSync(gamePath)) {
    return error(`Unable to find game path "${gamePath}".`);
  }

  let language = null;

  const files = ["production_Config.ini", "beta_Config.ini"];

  for (var i = 0; i < files.length; i++) {
    if ((language = _getGameLanguage(files[i]))) {
      break;
    }
  }

  if (!language) {
    return error("Unable to find game language.");
  }

  state.language = language;
  i18n.setLocale(language);

  return language;
}

module.exports = getGameLanguage;
