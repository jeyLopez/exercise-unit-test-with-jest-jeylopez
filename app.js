const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))


// Tasa de cambio respecto al euro
let oneEuroIs = {
    "JPY": 156.5, // yen japonés
    "USD": 1.07,  // dólar estadounidense
    "GBP": 0.87   // libra esterlina
};

//  Euro a Dólar
const fromEuroToDollar = function(valueInEuro) {
    return valueInEuro * oneEuroIs.USD;
};

// Dólar a Yen
const fromDollarToYen = function(valueInDollar) {
    // Primero convertimos de dólares a euros
    let valueInEuro = valueInDollar / oneEuroIs.USD;
    // Luego de euros a yenes
    let valueInYen = valueInEuro * oneEuroIs.JPY;
    return valueInYen;
};

// Yen a Libra
const fromYenToPound = function(valueInYen) {
    // Primero de yenes a euros
    let valueInEuro = valueInYen / oneEuroIs.JPY;
    // Luego de euros a libras
    let valueInPound = valueInEuro * oneEuroIs.GBP;
    return valueInPound;
};

// 💱 Ejemplos de uso
console.log(fromEuroToDollar(1));  // 1.07
console.log(fromDollarToYen(1));   // ≈ 146.26
console.log(fromYenToPound(1000)); // ≈ 5.56


module.exports = { sum, 
    oneEuroIs,
    fromEuroToDollar,
    fromDollarToYen,
    fromYenToPound
};
