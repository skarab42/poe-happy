const { name, version, author, homepage, license } = require("../package.json");
const path = require("path");

const state = {
  debug: true,
  app: {
    name,
    version,
    author,
    homepage,
    license,
    title: `${name} v${version}`
  },
  language: "en",
  league: null,
  leagues: null,
  paths: {
    root: __dirname,
    views: path.join(__dirname, "views"),
    images: path.join(__dirname, "images")
  },
  ui: {},
  POE_WINDOWS_GROUP: [
    "PathOfExile",
    "PathOfExileSteam",
    "PathOfExile_x64",
    "PathOfExile_x64Steam",
    "atom" // <<-- DEBUG ONLY REMOVE ME !!!
  ]
};

module.exports = state;
