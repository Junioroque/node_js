//ternario

let number = 5;

console.log((number % 2 == 0) ? "Par" : "Impar");

let age = 33;

console.log((age >= 18) ? "Maior de idade" : "Menor de idade");

console.log("")

const hours = 12;

console.log(
    "Está de", 
    hours >= 0 && hours < 6 ? "madrugada" :
    hours >= 6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "tarde" :
    "noite"   
)