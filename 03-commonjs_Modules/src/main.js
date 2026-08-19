const p = require("./services/products.js");
const config = require("./services/config.js");
const database = require("./services/database.js");

async function main() {
    console.log("Carrinho de compras")
    p.getFullName("15", "Mouse")
    p.getProductLabel("Teclado")

    console.log(config.version + " - " + config.production)
    database.connectToDatabase("MySQL")
    database.disconnectDatabase()

}

main();