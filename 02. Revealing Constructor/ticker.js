// 대표적인 예가 new Promise((resolve, reject) => {  })
// Executor 함수

const Roee = require("./roee");

const ticker = new Roee((emit) => {
  let tickCount = 0;

  setInterval(() => emit("tick", tickCount++), 1000);
});

module.exports = ticker;
