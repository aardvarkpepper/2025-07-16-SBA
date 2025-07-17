export const calculateTax = (discountedPrice: number, category: string, discountObject: {[key: string]: number} = {'groceries': 0.03}, taxRate: number = 0.0475, decimalPlaces: number = 2): number => {
  if (discountObject[category]) {
    taxRate = discountObject[category];
  }
  const taxBeforeRounding = discountedPrice * (taxRate);
  const factor = Math.pow(10, decimalPlaces);
  return Math.round(taxBeforeRounding * factor) / factor;
}