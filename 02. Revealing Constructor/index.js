const ticker = require("./ticker");

ticker.on("tick", (tickCount) => console.log(tickCount, "TICK"));
// ticker.emit('something', {}) <-- 오류 발생
