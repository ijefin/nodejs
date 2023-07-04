const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      name: "nome",
      message: "Digite seu nome: ",
    },
    {
      name: "idade",
      message: "Digite sua idade: ",
    },
  ])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
