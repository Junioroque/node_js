async function getFullName(codeId, productName) {
    console.log("productX: " + codeId + " -> " + productName);
}

async function getProductLabel(productName) {
    console.log("Product " + productName);
}

module.exports = {
    getFullName,
    getProductLabel
}