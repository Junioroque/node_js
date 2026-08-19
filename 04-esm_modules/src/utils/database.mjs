const databaseType = {
    userType: "admin",
    typeData: "dataLocal",
}

async function connectToDabase(dataName) {
    console.log(`coectado ao banco ${dataName}`);
}

async function disconnectDatabase() {
    console.log("desconectado");
}

export {connectToDabase, disconnectDatabase, databaseType}