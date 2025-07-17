export const calculateTax = (discountedPrice, category, discountObject = { 'groceries': 0.03 }, taxRate = 0.0475, decimalPlaces = 2) => {
    if (discountObject[category]) {
        taxRate = discountObject[category];
    }
    const taxBeforeRounding = discountedPrice * (taxRate);
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(taxBeforeRounding * factor) / factor;
};
