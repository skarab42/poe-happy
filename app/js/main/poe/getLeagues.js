const axios = require("axios");
const error = require("../error");
const store = require("../store");

async function getLeagues() {
  // https://www.pathofexile.com/developer/docs/api-resource-leagues#list
  // http://api.pathofexile.com/leagues?type=main&realm=pc&compact=1
  // https://www.pathofexile.com/api/trade/data/leagues
  try {
    let lang = store.get("language", "en");
    if (lang === "en") {
      lang = "www";
    }
    const url = `https://${lang}.pathofexile.com/api/trade/data/leagues`;
    const response = await axios.get(url);
    return response.data.result;
  } catch (e) {
    error(e.message);
  }
}

module.exports = getLeagues;
