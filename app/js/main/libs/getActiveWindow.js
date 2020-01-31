const spawnPromise = require("./spawnPromise");

// https://gallery.technet.microsoft.com/Get-Active-Window-on-User-352fa957
const VBS = `
Add-Type @"
  using System;
  using System.Runtime.InteropServices;
  public class User32 {
    [DllImport("user32.dll")]
    public static extern IntPtr GetForegroundWindow();
}
"@
try {
  $HWND = [User32]::GetForegroundWindow()
  Get-Process |
  Where-Object { $_.MainWindowHandle -eq $HWND } |
  Format-List ProcessName, MainWindowTitle, MainWindowHandle, Path
} catch {
    Write-Error "Failed to get active Window details. More Info: $_"
}
`;

async function getActiveWindow() {
  return await spawnPromise("powershell", ["-command", VBS], {
    windowsHide: true,
    timeout: 1000
  }).then(response => {
    const activeWindow = {};
    const lines = response.stdout.trim().split(/\r\n/);
    lines.forEach(line => {
      let parts = line.split(":");
      const key = parts.shift().trim();
      let val = parts.join(":").trim();
      if (key === "MainWindowHandle") {
        val = parseInt(val);
      }
      activeWindow[key] = val;
    });
    return activeWindow;
  });
}

module.exports = getActiveWindow;
