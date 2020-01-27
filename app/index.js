const { app, globalShortcut } = require("electron");
const getGameLanguage = require("./js/getGameLanguage");
const createTray = require("./ui/createTray");
const createAbout = require("./ui/createAbout");
const createItem = require("./ui/createItem");
const showItemInfo = require("./ui/showItemInfo");

function onAppReady() {
  console.log("onAppReady");
  getGameLanguage();
  createTray();
  createAbout();
  createItem();
  globalShortcut.register("Control+I", showItemInfo);
}

function onAppQuit() {
  console.log("onAppQuit");
}

app.on("ready", onAppReady);
app.on("quit", onAppQuit);
