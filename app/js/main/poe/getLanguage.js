const { app, dialog } = require("electron");
const path = require("path");
const fs = require("fs");

const docsPath = app.getPath("documents");
const gamePath = path.join(docsPath, "My Games", "Path of Exile");

function error(message) {
  dialog.showErrorBox("Oups !", message);
  app.quit();
}

function _getLanguage(file) {
  try {
    const iniFile = path.join(gamePath, file);
    const contents = fs.readFileSync(iniFile, "utf8");
    const matches = contents.match(/language=(.*)/);
    return matches ? matches[1] : null;
  } catch (e) {
    return null;
  }
}

function getLanguage() {
  if (!fs.existsSync(gamePath)) {
    return error(`Unable to find game path "${gamePath}".`);
  }

  let language = null;

  const files = ["production_Config.ini", "beta_Config.ini"];

  for (var i = 0; i < files.length; i++) {
    if ((language = _getLanguage(files[i]))) {
      break;
    }
  }

  if (!language) {
    return error("Unable to find game language.");
  }

  return language;
}

module.exports = getLanguage;
