const POE_WINDOWS_GROUP = [
  "PathOfExile",
  "PathOfExileSteam",
  "PathOfExile_x64",
  "PathOfExile_x64Steam",
  "atom" // <<-- DEBUG ONLY REMOVE ME !!!
];

function isPoEWindow(win) {
  return POE_WINDOWS_GROUP.includes(win.ProcessName);
}

module.exports = isPoEWindow;
