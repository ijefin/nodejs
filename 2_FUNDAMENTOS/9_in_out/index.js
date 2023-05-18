const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Qual sua linguagem de programação preferida? ",
  (language) => {
    console.log(`Sua lingugagem preferida é ${language}`);
    readline.close();
  }
);
