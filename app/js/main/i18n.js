const i18n = require("i18n");
const store = require("./store");

i18n.configure({ directory: store.get("paths").locales });

module.exports = i18n;
