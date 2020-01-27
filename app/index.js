const { app } = require("electron");
const getGameLanguage = require("./js/getGameLanguage");
const createTray = require("./ui/createTray");
const createAbout = require("./ui/createAbout");
const createItem = require("./ui/createItem");
const registerShortcuts = require("./js/registerShortcuts");
const i18n = require("./i18n");

function onAppReady() {
  const language = getGameLanguage();
  i18n.setLocale(language);
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
