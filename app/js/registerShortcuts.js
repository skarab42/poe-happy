const { globalShortcut } = require("electron");
const showItemInfo = require("../ui/showItemInfo");

function registerShortcuts() {
  globalShortcut.register("Control+I", showItemInfo);
}

module.exports = registerShortcuts;
