const spawnPromise = require("./spawnPromise");

function appActivate(title) {
  return spawnPromise(
    "powershell",
    [
      "-command",
      "$wshell = New-Object -ComObject wscript.shell;",
      `$wshell.AppActivate("${title}");`,
      "Sleep -Milliseconds 42;"
    ],
    {
      windowsHide: true,
      timeout: 1000
    }
  );
}

module.exports = appActivate;
