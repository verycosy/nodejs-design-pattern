const createFailsafeSocket = require("./failSafeSocket");
const failSafeSocket = createFailsafeSocket({ port: 5000 });

setInterval(() => {
  failSafeSocket.send(process.memoryUsage());
}, 1000);
