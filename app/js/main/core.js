const state = require("./state");
const i18n = require("./i18n");

class Core {
  constructor() {
    this.state = state;
    this.i18n = i18n;
    this.ui = {};
  }

  updateLanguage() {
    const language = require("./poe/getLanguage")();
    this.state.app.language = language;
    this.i18n.setLocale(language);
  }

  async updateLeagues() {
    const getLeagues = require("./poe/getLeagues");
    const leagues = await getLeagues();
    this.state.leagues = leagues;
    if (!this.state.league) {
      this.state.league = this.state.leagues[0].id;
    }
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
