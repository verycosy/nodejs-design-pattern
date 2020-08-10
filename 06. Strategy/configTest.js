const Config = require("./config");
const strategies = require("./strategies");

const jsonConfig = new Config(strategies.json);
jsonConfig.read("samples/conf.json");
jsonConfig.set("book", "nodejs");
jsonConfig.save("samples/conf_mod.json");

const iniConfig = new Config(strategies.ini);
iniConfig.read("samples/conf.ini");
iniConfig.set("book", "nodejs");
iniConfig.save("samples/conf_mod.ini");
