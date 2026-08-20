console.log("Hello, World!");

//variaveis
let isName = "John";
let age = 30;
let isStudent = true;

console.log("Nome: " + isName);
console.log("Age:" + age);
console.log("Is Student: " + isStudent);


const rl = require("node:readline")

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});
let name;

prompt.question("Qual é o seu nome? ", answer => {
    name = answer;
    console.log("Olá, " + name + "!");
    prompt.close();
})
