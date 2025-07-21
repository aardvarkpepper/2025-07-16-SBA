var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Product } from './models/Product.js';
import { getProducts } from './services/apiService.js';
import { errorHandler } from './utils/errorHandler.js';
//const container = document.getElementById('container');
console.log('Index running before function invocation');
/**
 * Everything from here to next /** ignore.  Fast rewrite of functions to eliminate HTML/DOM operations.
 */
// Changing tsconfig.json "module": "commonjs",   to "module": ""
// just look at this magnificent naming convention.
// const goTime = async (): Promise<void> => {
//   let productArray: Product[] = [];
//   console.log('Index running');
//   try {
//     const productArrayData = await getProducts();
//     (productArray as Product[] | undefined) = productArrayData;
//     // yeah I could have used setTimeout to simulate passing the API data to individual products and Promise allSettled.  Whatev.
//     for (let i = 0; i < productArray.length; i++) {
//       const newProduct = new Product(productArray[i]);
//       //console.log(newProduct.displayDetails(container: HTMLElement));
//       newProduct.displayDetails(container as HTMLElement);
//       // note:  remember getPriceWithDiscount is not used.
//     }
//   } catch (error) {
//     // By this point, there's only one likely source of error, the fetch in getProducts.  If that's the error, and it's a connection error, it should already have been caught and handled at the getProducts level.
//     // could use type casting or whatever it's called to set error as Error, so 'error as Error' not required.  Eh.
//     // Who cares, because it's not required and I won't know why I lose points anyways?
//     // It's honestly demoralizing.  Well, I'll try not to think on it overly much.
//     errorHandler((error as Error), 'All information necessary to tracing the error is in the error message.');
//   }
// }
/**
 * Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action.
 */
// Changing tsconfig.json "module": "commonjs",   to "module": ""
// just look at this magnificent naming convention.
const goTime = () => __awaiter(void 0, void 0, void 0, function* () {
    let productArray = [];
    console.log('Index running');
    try {
        const productArrayData = yield getProducts();
        productArray = productArrayData;
        // yeah I could have used setTimeout to simulate passing the API data to individual products and Promise allSettled.  Whatev.
        for (let i = 0; i < productArray.length; i++) {
            const newProduct = new Product(productArray[i]);
            //console.log(newProduct.displayDetails(container: HTMLElement));
            // newProduct.displayDetails(container as HTMLElement);
            newProduct.displayDetails();
            // note:  remember getPriceWithDiscount is not used.
        }
    }
    catch (error) {
        // By this point, there's only one likely source of error, the fetch in getProducts.  If that's the error, and it's a connection error, it should already have been caught and handled at the getProducts level.
        // could use type casting or whatever it's called to set error as Error, so 'error as Error' not required.  Eh.
        // Who cares, because it's not required and I won't know why I lose points anyways?
        // It's honestly demoralizing.  Well, I'll try not to think on it overly much.
        errorHandler(error, 'All information necessary to tracing the error is in the error message.');
    }
});
goTime();
