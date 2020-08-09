const profiler = require("./03. 예제(프로파일러)");

function getRandomArray(len) {
  const p = profiler(`Generating a ${len} items long array`);
  p.start();

  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.random());
  }

  p.end();
}

getRandomArray(1e6);
console.log("Done");
