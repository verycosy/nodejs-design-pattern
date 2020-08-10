const Koa = require("koa");

const app = new Koa();

app.use(require("./rateLimit"));
app.use(function* () {
  this.body = { now: new Date() };
});
// Support for generators will be removed in v3.

app.listen(3000);
