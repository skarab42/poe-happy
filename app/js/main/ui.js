const createTray = require("./ui/createTray");
const createWin = require("./ui/createWin");

const ui = {
  tray: createTray(),
  item: createWin("item"),
  about: createWin("about"),
  leagues: createWin("leagues")
};

module.exports = ui;
