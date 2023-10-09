const chalk = require('chalk')
const inquirer = require("inquirer");

inquirer.prompt([
  {
    name: 'nome',
    message: 'Qual seu nome?'
  },
  {
    name: 'idade',
    message: 'Qual sua idade?'
  }
]).then((answers) => {
  try {
    console.log(chalk.bgYellow.black(`Seu nome ${answers.nome}`));
    console.log(chalk.bgYellow.black(`Sua idade ${answers.idade}`));
  } catch (err) {
    console.log("Deu erro", err);
  }
}).catch(err => console.log(err));



