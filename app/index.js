const { app } = require("electron");
const getGameLanguage = require("./js/getGameLanguage");
const getCurrentLeagues = require("./js/getCurrentLeagues");
const createTray = require("./ui/createTray");
const createItem = require("./ui/createItem");
const createAbout = require("./ui/createAbout");
const createLeagues = require("./ui/createLeagues");
const registerShortcuts = require("./js/registerShortcuts");

function onAppReady() {
  getGameLanguage();
  getCurrentLeagues();
  createTray();
  createItem();
  createAbout();
  createLeagues();
  registerShortcuts();
}

function onAppQuit() {
  console.log("Bye bye !");
}

app.on("ready", onAppReady);
app.on("quit", onAppQuit);
