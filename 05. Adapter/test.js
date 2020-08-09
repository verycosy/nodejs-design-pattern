const levelup = require("level");
const fsAdapter = require("./fsAdapter");
const db = levelup("./fsDB", { valueEncoding: "binary" });
const fs = fsAdapter(db);
// const fs = require("fs");

fs.writeFile("file.txt", "Hello", () => {
  fs.readFile("file.txt", { encoding: "utf8" }, (err, res) => {
    console.log(res);
  });
});

fs.readFile("missing.txt", { encoding: "utf8" }, (err, res) => {
  console.log(err);
});
