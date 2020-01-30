const axios = require("axios");
const error = require("../error");

async function getLeagues() {
  // https://www.pathofexile.com/developer/docs/api-resource-leagues#list
  // http://api.pathofexile.com/leagues?type=main&realm=pc&compact=1
  // https://www.pathofexile.com/api/trade/data/leagues
  try {
    const url = "https://www.pathofexile.com/api/trade/data/leagues";
    const response = await axios.get(url);
    return response.data.result;
  } catch (e) {
    error(e.message);
  }
}

module.exports = getLeagues;
