const minimist = require("minimist");
const chalk = require("chalk");

const args = minimist(process.argv.slice(2));
const studentGrade = args["grade"];

const validateStudent = (grade) => {
  if (grade > 18) {
    console.log(chalk.bgGreen("Parabéns, você está aprovado!"));
  } else {
    console.log(chalk.bgRed.black("Você não foi aprovado!"));
  }
};

validateStudent(studentGrade);
