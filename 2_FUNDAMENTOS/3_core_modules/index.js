const path = require("path");

const extension = path.extname("arquivo.word");

if (extension !== ".pdf") {
  console.log("Arquivo inválido! Por favor, insira um PDF.");
  return;
} else {
  console.log(extension);
}
