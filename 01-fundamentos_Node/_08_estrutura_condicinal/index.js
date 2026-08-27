// estrutura condicional

// if, else if, else

let temperatura = 25;

if(temperatura >= 30){
    console.log("Muito quente")
}else {
    console.log("Clima agradavel");
}

console.log("");
//nota
let grade = 7.5;

if(grade >= 9) {
    console.log("Aprovado")
}else if(grade >= 7) {
    console.log("Aprovado na Media")
}else {
    console.log("Reprovado.")
}

console.log(" ")

// triangulo
const sideA = 3;
const sideB = 2;
const sideC = 3;

if(sideA === sideB && sideB === sideC) {
    console.log("O triângulo é equilátero.");
}else if(sideA === sideB || sideB === sideC || sideA === sideC) {
    console.log("O triânglo é isóceles.")
}else {
    console.log("O triângulo é escaleno.")
}