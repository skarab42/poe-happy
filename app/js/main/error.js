const { app, dialog } = require("electron");

function error(message) {
  dialog.showErrorBox("Oups !", message);
  app.quit();
}

module.exports = error;
