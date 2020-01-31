const Store = require("./libs/store");

const {
  name,
  version,
  license,
  author,
  homepage
} = require("../../../package.json");

const path = require("path");
const appPath = path.resolve(__dirname, "../..");

const store = new Store({
  paths: {
    app: appPath,
    views: path.join(appPath, "views"),
    images: path.join(appPath, "images"),
    locales: path.join(appPath, "locales")
  },
  app: {
    name,
    version,
    license,
    author,
    homepage,
    title: `${name} v${version}`
  },
  language: "en",
  leagues: [],
  league: null
});

module.exports = store;
