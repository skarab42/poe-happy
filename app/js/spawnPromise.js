const promiseFactory = require("./promiseFactory");
const { spawn } = require("child_process");

function spawnPromise(command, args = [], options = {}) {
  return promiseFactory((resolve, reject) => {
    const payload = { error: null, stderr: "", stdout: "", code: null };
    const shell = spawn(command, args, options);

    shell.stdout.on("data", data => {
      payload.stdout += data.toString();
    });

    shell.stderr.on("data", data => {
      payload.stderr += data.toString();
    });

    shell.on("error", error => {
      payload.error = error;
    });

    shell.on("close", code => {
      payload.code = code;

      if (!payload.error && payload.stderr.length) {
        payload.error = new Error(payload.stderr);
      }

      if (payload.error) {
        reject(payload);
      } else {
        resolve(payload);
      }
    });
  });
}

module.exports = spawnPromise;
