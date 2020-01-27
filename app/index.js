const { app } = require("electron");
const getGameLanguage = require("./js/getGameLanguage");
const createTray = require("./ui/createTray");
const createAbout = require("./ui/createAbout");
const createItem = require("./ui/createItem");
const registerShortcuts = require("./js/registerShortcuts");

function onAppReady() {
  getGameLanguage();
  createTray();
  createAbout();
  createItem();
  registerShortcuts();
}

function onAppQuit() {
  console.log("Bye bye !");
}

app.on("ready", onAppReady);
app.on("quit", onAppQuit);
