const i18n = require("./i18n");

class Core {
  constructor() {
    this.i18n = i18n;
    this.ui = {};
  }

  init() {
    this.ui = require("./ui");
  }

  quit() {
    console.log("Core: quit");
  }
}

const core = new Core();

module.exports = core;
