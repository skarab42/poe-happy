const spawnPromise = require("./spawnPromise");

function shellPromise(command, options = {}) {
  return spawnPromise(command, [], { ...options, shell: true });
}

module.exports = shellPromise;
