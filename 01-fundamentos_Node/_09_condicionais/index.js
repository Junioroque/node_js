const rl = require("node:readline");
const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

prompt.question("Digite sua  idade ", answer => {
    const age = Number(answer);
    if(Number.isNaN(age)) {
        console.log("Nao e um numero valido", age)
    }else {
        console.log(`A sua idade é ${age}`);
    }
    prompt.close();
})