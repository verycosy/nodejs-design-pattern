// ROEE(Read-Only-Event-Emit)

const EventEmitter = require("events");

module.exports = class Roee extends EventEmitter {
  constructor(executor) {
    super();

    const emit = this.emit.bind(this);
    this.emit = undefined;

    executor(emit);
  }
};
