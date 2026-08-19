//Export default

exports.connectToDatabase = (dataName) => {
    console.log("Conectando ao banco: " + dataName)
}

exports.disconnectDatabase = () => {
    console.log("Desconectando");
}