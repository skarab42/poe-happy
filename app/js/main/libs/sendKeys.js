const spawnPromise = require("./spawnPromise");

async function sendKeys(keys) {
  return await spawnPromise(
    "powershell",
    [
      "-command",
      "$wshell = New-Object -ComObject wscript.shell;",
      `$wshell.SendKeys("${keys}");`,
      "Sleep -Milliseconds 42;"
    ],
    {
      windowsHide: true,
      timeout: 1000
    }
  );
}

module.exports = sendKeys;
