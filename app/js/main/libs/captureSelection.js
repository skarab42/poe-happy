const { clipboard } = require("electron");
const sendKeys = require("./sendKeys");

async function captureSelection() {
  const oldText = clipboard.readText();
  clipboard.clear();
  await sendKeys("^c");
  const selection = clipboard.readText();
  clipboard.writeText(oldText);
  return selection;
}

module.exports = captureSelection;
