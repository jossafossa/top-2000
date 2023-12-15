export default class EventHandler {
  constructor(settings = {}) {
    this.events = {};
  }

  on(event, callback) {
    if (this.events[event] || true) {
      this.events[event] = [];
    }

    this.events[event].push(callback);
  }

  emit(event, params) {
    if (event in this.events) {
      for (let callback of this.events[event]) {
        callback(params);
      }
    }
  }
}
