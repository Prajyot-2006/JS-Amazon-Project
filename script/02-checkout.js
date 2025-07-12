import { renderOrderSummary } from "./checkout/03-orderSummary.js";  // this means u are only loading renderOrderSummary function into this file 
import { renderpaymentSummary } from "./checkout/04-paymentSummary.js"; // this means u are only loading renderPaymentSummary function into this file
// import { cart } from "../data/04-(02-cart-oop).js"; // this means u are only loading cart variable into this file
//import '../data/classes/01-(04-(02-cart-oop)).js'  // this means u are loading the entire file's code into this file 
//import { a } from "../data/07-backend-practice.js";
//import { b } from "../data/08-backend-practice.js";
//import { c } from "../data/09-backend-practice.js";
renderOrderSummary();
renderpaymentSummary();