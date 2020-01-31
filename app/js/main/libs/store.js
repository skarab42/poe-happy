let state = null;

class Store {
  constructor(initialState = {}) {
    if (state === null) {
      state = initialState;
    } else if (initialState !== {}) {
      console.log("Warning: Store initialState can not be set twice.");
    }
    this.state = state;
  }

  has(key) {
    return key in this.state;
  }

  get(key, defaultValue = null) {
    if (this.has(key)) {
      return this.state[key];
    }
    return defaultValue;
  }

  set(key, value) {
    this.state[key] = value;
  }

  merge(key, value) {
    const oldValue = this.get(key, {});
    this.set(key, { ...oldValue, ...value });
  }

  delete(key) {
    delete this.state[key];
  }
}

module.exports = Store;
