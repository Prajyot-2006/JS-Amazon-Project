import { deliveryOptions } from "../../data/03-deliveryOptions.js";

console.log('Test suite : deliveryOptions');
console.log('Checks shipping Fee through deliveryDays')
const deliveryDays = 7;
let store = '';
export function getDeliveryOption(deliveryDays){
    deliveryOptions.forEach((option)=>{
        if(option.deliveryDays === deliveryDays){
            store = option;
        }
    })
    console.log('The shipping price for deliveryDays is :' , store.priceCents)
}
// note deliverydays are only 7 , 3 , 1 not other than that if u pass any other no then it results in undefined 
getDeliveryOption(deliveryDays);


/*
Testing is the process of checking whether your code or application works as expected and finding any bugs or errors before users do.
automated testing : using code to test code 


🧪 Manual Testing (your Amazon project)
Manual testing is when you test your app yourself, in the browser.

For example:
You open checkout.html.
You select a delivery option.
You check visually if the delivery price updates correctly.
You refresh the page to test if the cart items are still there.
✅ You're clicking, checking, and verifying all features work — by hand.


🤖 Automated Testing (your Amazon project)
Automated testing is when you write JavaScript test code (e.g., with Jest) to test if your functions behave correctly — without opening the browser.
In the above eg : we now deliverydays are only 7 , 3 , 1 not other than that , so we wil pass each of this number to get the shipping price , so that we wont need to open our 
project in chrome tab and then select deliveryDays to check the shipping price , here we can see that instantly in console after runnig this file 
Thats what testing is 

*/