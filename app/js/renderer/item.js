const { ipcRenderer } = require("electron");

// setTitle(i18n.__("Item"));

ipcRenderer.on("item", (event, item) => {
  console.log(item);
  setTitle(item.name);
  setBodyText(item.text);
});
