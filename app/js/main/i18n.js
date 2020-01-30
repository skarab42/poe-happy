const i18n = require("i18n");
const { paths } = require("./state");

i18n.configure({ directory: paths.locales });

module.exports = i18n;
