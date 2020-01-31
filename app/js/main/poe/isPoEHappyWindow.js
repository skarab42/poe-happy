function isPoEHappyWindow(win) {
  return win.ProcessName === "electron" && win.MainWindowTitle === "poe-happy";
}

module.exports = isPoEHappyWindow;
