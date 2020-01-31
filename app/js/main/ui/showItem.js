const captureSelection = require("../libs/captureSelection");
const isPoEHappyWindow = require("../poe/isPoEHappyWindow");
const getActiveWindow = require("../libs/getActiveWindow");
const appActivate = require("../libs/appActivate");
const isPoEWindow = require("../poe/isPoEWindow");
const parseItem = require("../poe/parseItem");
const { item } = require("../ui");

async function showItem() {
  let activeWindow = await getActiveWindow();

  if (isPoEHappyWindow(activeWindow)) {
    item.hide();
    await appActivate("Path of Exile");
    activeWindow = await getActiveWindow();
  }

  if (!isPoEWindow(activeWindow)) {
    return;
  }

  const selection = await captureSelection();
  const itemData = parseItem(selection);
  item.webContents.send("item", itemData);
  item.showInactive();
}

module.exports = showItem;
