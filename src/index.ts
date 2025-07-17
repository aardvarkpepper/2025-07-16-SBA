import { Product } from './models/Product.ts';
import { calculateTax } from './utils/taxCalculator.ts';
import { calculateDiscount } from './utils/discountCalculator.ts';
import { getProducts } from './services/apiService.ts';

/**
 * Create instances of Product by fetching product data from the API.
Use asynchronous functions to fetch product data and display it.
Demonstrate error handling and OOP principles in action.
 */