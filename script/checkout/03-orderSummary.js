import {cart , removeFromCart , updateDeliveryOption} from '../../data/02-cart.js';
import {products , getProduct} from '../../data/01-products.js';
import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
import {deliveryOptions , getDeliveryOption} from '../../data/03-deliveryOptions.js';
import { renderpaymentSummary } from './04-paymentSummary.js';

/* we learned about external libraries in JS , here the hello and dayjs are external libraries which we can use in this code if we link them (script src="") 
// dayjs is a external lib that has another methods like (format() ) and properties like (.add) , 
hello();
const today = dayjs(); 
console.log(today);
const deliveryDate = today.add(7 , 'day');  // add method takes 2 parameter 1)st one is the number of time that we want to add 2) parameter is a link of time like(day etc)
// console.log(deliveryDate);
// deliveryDate.format('dddd , MMMM D') // so this method takes the date and convert it into a stcing in this format 4d is used to display the days of week , to shown the month we can type 4M , to show the day of the month into the string we can type D (this method takes the date and converts it into a string with this format)
console.log(deliveryDate.format('dddd , MMMM D'))
*/
export function renderOrderSummary(){

let cartSummaryHTML = "";

cart.forEach((cartItem)=>{
    const productId = cartItem.productId

    const matchingProduct = getProduct(productId);

    const deliveryOptionId = cartItem.deliveryOptionId;
    const  deliveryOption = getDeliveryOption(deliveryOptionId);

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
    const dateString = deliveryDate.format('dddd, MMMM D')

    console.log(matchingProduct);

    cartSummaryHTML = cartSummaryHTML + `
    <div class="cart-item-container js-cart-item-container-${productId}">
        <div class="delivery-date">
            Delivery date: ${dateString}
        </div>

        <div class="cart-item-details-grid">
            <img class="product-image"
            src="${matchingProduct.image}">

            <div class="cart-item-details">
            <div class="product-name">
                ${matchingProduct.name}
            </div>
            <div class="product-price">
                $${(matchingProduct.priceCents/100).toFixed(2)}
            </div>
            <div class="product-quantity">
                <span>
                Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                </span>
                <span class="update-quantity-link link-primary">
                Update
                </span>
                <span class="delete-quantity-link link-primary js-delete-link"  data-product-id="${matchingProduct.id}">
                Delete
                </span>
            </div>
            </div>

            <div class="delivery-options">
            <div class="delivery-options-title">
                Choose a delivery option:
            </div>
            ${deliveryOptionsHTML(matchingProduct,cartItem)}
            </div>
        </div>
    </div> `
})


function deliveryOptionsHTML(matchingProduct,cartItem){
    let html ='';
    deliveryOptions.forEach( (deliveryOption) => {
        const today = dayjs();
        const deliveryDate = today.add(deliveryOption.deliveryDays,'days');
        const dateString = deliveryDate.format('dddd, MMMM D')
        let priceString;
        if(deliveryOption.priceCents === 0){
            priceString = 'FREE';
        }
        else{
            priceString = `$${deliveryOption.priceCents/100}`;
        }

        const isChecked = deliveryOption.id === cartItem.deliveryOptionId
        // decide what goes in the attribute
        let checkedAttribute;
        if (isChecked){
            checkedAttribute = 'checked';   // will appear in the markup
        }
        else{
            checkedAttribute = '';   // nothing if not selected
        }

        html = html + 
        `
        <div class="delivery-option js-delivery-option"
            data-product-id="${matchingProduct.id}"
            data-delivery-option-id="${deliveryOption.id}">
            <input type="radio"
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}"
             ${checkedAttribute}>
            <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
            <div class="delivery-option-price">
                ${priceString}- Shipping
            </div>
            </div>
        </div>`
    });
    return html;
}

console.log(cartSummaryHTML);
document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

document.querySelectorAll('.js-delete-link').forEach((link) => {
    link.addEventListener(('click') , ()=>{
        console.log('delete');
        const productId = link.dataset.productId;
        removeFromCart(productId);
        console.log(cart);
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        // console.log(container);
        container.remove()

        renderpaymentSummary();
    }); 
})

document.querySelectorAll('.js-delivery-option').forEach((element) => {
  element.addEventListener('click', () => {
    const productId        = element.dataset.productId;
    const deliveryOptionId = element.dataset.deliveryOptionId;

    updateDeliveryOption(productId, deliveryOptionId);
    renderOrderSummary();
    renderpaymentSummary();
  });
});

}


