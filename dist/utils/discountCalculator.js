// for price 9.99 and discountPercentage 7.17, discount amount is 0.716283.  Price is then 9.273717.  Function effectively rounds to two decimal places, up or down.
// decimalPlaces method used, as currency conversion may request more precision.
// After triggering .70999999 in test data using taxCalculator, reverted to .toFixed.  Changed back again after noting decimal places triggered on addition of function calls in later step.
export const calculateDiscount = (price, discountPercentage, decimalPlaces = 2) => {
    const priceBeforeRounding = price - (price * (discountPercentage * 0.01));
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(priceBeforeRounding * factor) / factor;
};
