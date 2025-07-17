import { calculateDiscount } from '../utils/discountCalculator.js';
import { calculateTax } from '../utils/taxCalculator.js';
// const mrTest = {
//   "id": 1,
//   "title": "Essence Mascara Lash Princess",
//   "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
//   "category": "beauty",
//   "price": 9.99,
//   "discountPercentage": 7.17,
//   "rating": 4.94,
//   "stock": 5,
//   "tags": [
//     "beauty",
//     "mascara"
//   ],
//   "brand": "Essence",
//   "sku": "RCH45Q1A",
//   "weight": 2,
//   "dimensions": {
//     "width": 23.17,
//     "height": 14.43,
//     "depth": 28.01
//   },
//   "warrantyInformation": "1 month warranty",
//   "shippingInformation": "Ships in 1 month",
//   "availabilityStatus": "Low Stock",
//   "reviews": [
//     {
//       "rating": 2,
//       "comment": "Very unhappy with my purchase!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "John Doe",
//       "reviewerEmail": "john.doe@x.dummyjson.com"
//     },
//     {
//       "rating": 2,
//       "comment": "Not as described!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "Nolan Gonzalez",
//       "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
//     },
//     {
//       "rating": 5,
//       "comment": "Very satisfied!",
//       "date": "2024-05-23T08:56:21.618Z",
//       "reviewerName": "Scarlett Wright",
//       "reviewerEmail": "scarlett.wright@x.dummyjson.com"
//     }
//   ],
//   "returnPolicy": "30 days return policy",
//   "minimumOrderQuantity": 24,
//   "meta": {
//     "createdAt": "2024-05-23T08:56:21.618Z",
//     "updatedAt": "2024-05-23T08:56:21.618Z",
//     "barcode": "9164035109868",
//     "qrCode": "..."
//   },
//   "thumbnail": "...",
//   "images": ["...", "...", "..."]
// };
export class Product {
    constructor(product) {
        this.displayDetails = (productContainer) => {
            const fragment = new DocumentFragment();
            for (const key in this) {
                const productPropertyContainer = document.createElement('div');
                if (typeof this[key] !== 'function') {
                    const productPropertyKey = document.createElement('span');
                    const productPropertyValue = document.createElement('span');
                    productPropertyKey.textContent = key;
                    productPropertyContainer.appendChild(productPropertyKey);
                    if (typeof this[key] === 'object') {
                        console.log(`${key}, ${JSON.stringify(this[key])}`);
                        productPropertyValue.textContent = JSON.stringify(this[key]);
                    }
                    else {
                        console.log(`${key}, ${this[key]}`);
                        productPropertyValue.textContent = this[key];
                    }
                    productPropertyContainer.appendChild(productPropertyValue);
                    fragment.appendChild(productPropertyContainer);
                }
            }
            productContainer.appendChild(fragment);
            // return productContainer; I don't think it's necessary; should directly append.
            //return '======='; // separator, and so test doesn't have 'undefined'
        };
        this.getPriceWithDiscount = (decimalPlaces = 2) => {
            const discountPrice = calculateDiscount(this.price, this.discountPercentage);
            const taxOnDiscountPrice = calculateTax(discountPrice, this.category);
            const factor = Math.pow(10, decimalPlaces);
            return Math.round((discountPrice + taxOnDiscountPrice) * factor) / factor;
        };
        for (const keyName in product) {
            this[keyName] = product[keyName];
        }
        // This way of adding to the constructor will be an issue if the object sent to constructor has any of the same keys as methods or properties of class Product.  A few ways to prevent this, set Object.defineProperty writable: false.  Or alter all object keys to start with 'obj' for example, and have some sort of comment or programming safety against the class Product having methods or properties starting with 'obj.
        // note:  can also use 'readonly' in Typescript, or I think set some properties in tsconfig.json.  Eh.
        // Here I know there aren't any conflicts, so I leave off.
    }
}
// const mrTest2 = new Product(mrTest);
// console.log(`====`);
// console.log(mrTest2.displayDetails());
//mrTest2.printId();
