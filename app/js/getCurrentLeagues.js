const { app, dialog } = require("electron");
const axios = require("axios");
const state = require("../state");

function getCurrentLeagues() {
  // https://www.pathofexile.com/developer/docs/api-resource-leagues#list
  // http://api.pathofexile.com/leagues?type=main&realm=pc&compact=1
  // https://www.pathofexile.com/api/trade/data/leagues
  axios
    .get("https://www.pathofexile.com/api/trade/data/leagues")
    .then(function(response) {
      state.leagues = response.data.result;
      state.league = state.leagues[0].text;
    })
    .catch(function(error) {
      dialog.showErrorBox("Oups !", error);
      app.quit();
    });
}

module.exports = getCurrentLeagues;
