function promiseFactory(callback) {
  return new Promise((resolve, reject) => {
    setImmediate(() => callback(resolve, reject));
  });
}

module.exports = promiseFactory;
