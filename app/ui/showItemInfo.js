const state = require("../state");
const getActiveWindow = require("../js/getActiveWindow");
const appActivate = require("../js/appActivate");
const captureSelection = require("../js/captureSelection");
const parseItemText = require("../js/parseItemText");

function isItemWinActive(response) {
  return (
    response.ProcessName === "electron" &&
    response.MainWindowTitle === "PoE-Happy"
  );
}

function _showItemInfo(response) {
  if (isItemWinActive(response)) {
    return appActivate("Path of Exile").then(showItemInfo);
  }

  if (state.POE_WINDOWS_GROUP.includes(response.ProcessName)) {
    return captureSelection().then(text => {
      const item = parseItemText(text);
      state.ui.item.webContents.send("item", item);
      state.ui.item.showInactive();
    });
  }
}

function showItemInfo() {
  return getActiveWindow()
    .then(_showItemInfo)
    .catch(response => {
      // TODO write to log file
      console.log("Error:", response.error);
    });
}

module.exports = showItemInfo;
