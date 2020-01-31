const spawnPromise = require("./spawnPromise");

async function appActivate(title) {
  return await spawnPromise(
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
