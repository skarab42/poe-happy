const { clipboard } = require("electron");
const sendKeys = require("./sendKeys");

function captureSelection() {
  const oldText = clipboard.readText();
  clipboard.clear();
  return sendKeys("^c").then(() => {
    const selection = clipboard.readText();
    clipboard.writeText(oldText);
    return selection;
  });
}

module.exports = captureSelection;
