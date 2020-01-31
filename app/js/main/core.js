const store = require("./store");
const i18n = require("./i18n");

class Core {
  constructor() {
    this.store = store;
    this.i18n = i18n;
    this.ui = {};
  }

  updateLanguage() {
    const language = require("./poe/getLanguage")();
    this.store.set("language", language);
    this.i18n.setLocale(language);
  }

  async updateLeagues() {
    const getLeagues = require("./poe/getLeagues");
    const leagues = await getLeagues();
    this.store.set("leagues", leagues);
    if (!this.store.has("league")) {
      this.store.set("league", leagues[0].id);
    }
    // TODO: check if the league is out-of-date
  }

  async init() {
    this.updateLanguage();
    await this.updateLeagues();
    this.ui = require("./ui");
  }

  quit() {
    console.log("Core: quit");
  }
}

const core = new Core();

module.exports = core;
