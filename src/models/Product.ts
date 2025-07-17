import { calculateDiscount } from '../utils/discountCalculator.ts';
import { calculateTax } from '../utils/taxCalculator.ts';

// Define a Product class that includes the appropriate properties based on data provided in the API response.
// Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.
//console.log(calculateDiscount());
const mrTest = {
  "id": 1,
  "title": "Essence Mascara Lash Princess",
  "description": "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
  "category": "beauty",
  "price": 9.99,
  "discountPercentage": 7.17,
  "rating": 4.94,
  "stock": 5,
  "tags": [
    "beauty",
    "mascara"
  ],
  "brand": "Essence",
  "sku": "RCH45Q1A",
  "weight": 2,
  "dimensions": {
    "width": 23.17,
    "height": 14.43,
    "depth": 28.01
  },
  "warrantyInformation": "1 month warranty",
  "shippingInformation": "Ships in 1 month",
  "availabilityStatus": "Low Stock",
  "reviews": [
    {
      "rating": 2,
      "comment": "Very unhappy with my purchase!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "John Doe",
      "reviewerEmail": "john.doe@x.dummyjson.com"
    },
    {
      "rating": 2,
      "comment": "Not as described!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Nolan Gonzalez",
      "reviewerEmail": "nolan.gonzalez@x.dummyjson.com"
    },
    {
      "rating": 5,
      "comment": "Very satisfied!",
      "date": "2024-05-23T08:56:21.618Z",
      "reviewerName": "Scarlett Wright",
      "reviewerEmail": "scarlett.wright@x.dummyjson.com"
    }
  ],
  "returnPolicy": "30 days return policy",
  "minimumOrderQuantity": 24,
  "meta": {
    "createdAt": "2024-05-23T08:56:21.618Z",
    "updatedAt": "2024-05-23T08:56:21.618Z",
    "barcode": "9164035109868",
    "qrCode": "..."
  },
  "thumbnail": "...",
  "images": ["...", "...", "..."]
};

class Product {
  [key: string]: any;
  constructor(product: { [key: string]: any }) {
    for (const keyName in product) {
      this[keyName] = product[keyName];
    }
    // This way of adding to the constructor will be an issue if the object sent to constructor has any of the same keys as methods or properties of class Product.  A few ways to prevent this, set Object.defineProperty writable: false.  Or alter all object keys to start with 'obj' for example, and have some sort of comment or programming safety against the class Product having methods or properties starting with 'obj.

    // Here I know there aren't any conflicts, so I leave off.
  }
  displayDetails = () => {}
  getPriceWithDiscount = (decimalPlaces: number = 2) => {
    const discountPrice = calculateDiscount(this.price, this.discountPercentage);
    const taxOnDiscountPrice = calculateTax(discountPrice, this.category);
    const factor = Math.pow(10, decimalPlaces);
    return Math.round((discountPrice + taxOnDiscountPrice) * factor) / factor;
  }

  printId = () => {
    for (const key in this) {
      if (typeof this[key] !== 'function') {
        console.log(`${key}, ${this[key]}`)
        // note:  Arrays of strings do not print with [].  Objects print with [object Object].
        // tags: string[],
        // dimensions: { width: number, height: number, depth: number}
        // reviews: {"rating": number, "comment": string, "date": string that's a DateObject looking thing, "reviewerEmail": string}[] (that is, array of 3 objects), prints as [object Object], [object Object], [object Object].
        // meta: {createdAt: string dateObject looking thing, updatedAt: string dateObject looking thing, barcode: string, qrCode: string}

        //So I test the value; if it's an array of strings I use .join; if it's an object I iterate over keys, if it's an array of objects I iterate through the array iterating over the keys of each member object.
      }
    }
  }
}

const mrTest2 = new Product(mrTest);

console.log(`====`);

console.log(mrTest2.getPriceWithDiscount());

//mrTest2.printId();