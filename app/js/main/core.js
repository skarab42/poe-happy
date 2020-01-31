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
    const firstLeague = leagues[0].id;
    const league = this.store.get("league");
    if (league === null || !leagues.find(l => l.id === league.id)) {
      this.store.set("league", firstLeague);
    }
  }

  async init() {
    this.store.load();
    this.updateLanguage();
    await this.updateLeagues();
    this.ui = require("./ui");
  }

  quit() {
    this.store.save();
    console.log("Core: quit");
  }
}

const core = new Core();

module.exports = core;
