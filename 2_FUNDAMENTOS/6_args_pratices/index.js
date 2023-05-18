const minimist = require("minimist");
const mathOp = require("./soma");

const somar = mathOp.soma;

//external module
const args = minimist(process.argv.slice(2));

//internal module
const a = args["a"];
const b = args["b"];

somar(a, b);
