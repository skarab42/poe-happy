const state = require("../state");
const i18n = require("../i18n");

function showLeagues() {
  state.ui.leagues.webContents.send("title", i18n.__("Leagues"));
  state.ui.leagues.webContents.send("leagues", state.leagues);
  state.ui.leagues.webContents.send("league", state.league);
  state.ui.leagues.show();
}

module.exports = showLeagues;
