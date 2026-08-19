import chalk from "chalk";
import logSymbols from "log-symbols";

console.log(chalk.yellow('Hello, world!'));
console.log(chalk.blue.bgGray('Hello, world!'));

console.log(logSymbols.success, "Servidor iniciado com sucesso!");