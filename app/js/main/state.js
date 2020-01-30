const {
  name,
  version,
  license,
  author,
  homepage
} = require("../../../package.json");
const path = require("path");

const appPath = path.resolve(__dirname, "../..");

const state = {
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
  }
};

module.exports = state;
