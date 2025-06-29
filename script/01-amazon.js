/* in this file we learned about .toFixed(): It makes a number show only a certain number of digits after the decimal point.  (refer line no 67)
also learned about data attribute in html (refer line no 92)  (data atrribute starts from data only)
*/

/*
const products = [{  // make sure all obj values have the ame property bcoz the product has similar property
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        count: 87
    },
    priceCents: 1090 
},{
    image: 'images/products/intermediate-composite-basketball.jpg',
    name: 'Intermediate Size Basketball',
    rating: {
        stars: 4,
        count: 127
    },
    priceCents: 2095
},{
    image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating: {
        stars: 4.5,
        count: 56
    },
    priceCents: 799

},{
    image: 'images/products/black-2-slot-toaster.jpg',
    name: '2 Slot Toaster - Black',
    rating: {
        stars: 5,
        count: 2197
    },
    priceCents: 1899
}];
    we can use the const products variable like this also in this file only , but supersimple.dev has already created a data folder containing all data for products we just gonna use it 
*/

// now that we save the data , now we have to use this data to generate the html , instead of writing the html manually

import {cart , addToCart} from '../data/02-cart.js';  // we have to put all of our imports at the top of the files 
import {products} from '../data/01-products.js'
// const cart = []; this agian create a naming conflict 
let productsHTML = '';

products.forEach( (product)=> {  // so the way that foreach works , its that it takes each object saves it in this parameter called product and runs the function
    productsHTML = productsHTML + `
        <div class="product-container">
            <div class="product-image-container">
                <img class="product-image"
                src="${product.image}">
            </div>

            <div class="product-name limit-text-to-2-lines">
                ${product.name}
            </div>

            <div class="product-rating-container">
                <img class="product-rating-stars"
                src="images/ratings/rating-${product.rating.stars *10}.png">
                <div class="product-rating-count link-primary">
                ${product.rating.count}
                </div>
            </div>

            <div class="product-price">
                $${(product.priceCents /100).toFixed(2)}
            </div>

            <div class="product-quantity-container">
                <select>
                <option selected value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
                <img src="images/icons/checkmark.png">
                Added
            </div>

            <button class="add-to-cart-button button-primary  js-add-to-cart"  data-product-id="${product.id}">
                Add to Cart
            </button>
            </div>`;
} );
console.log(productsHTML);

document.querySelector('.js-products-grid').innerHTML = productsHTML;


function updatecartQuantity(){
    let cartQuantity = 0;
        cart.forEach((cartItem) => {
            cartQuantity = cartQuantity + cartItem.quantity;
        });

        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;
        console.log(cartQuantity);
        console.log(cart); 
}

document.querySelectorAll('.js-add-to-cart').forEach((button)=>{
    button.addEventListener('click' , ()=>{   // add to cart's 1st button , and so on 
        // console.log(button.dataset);
        // console.log(button.dataset.productName);  why n is capital ? coz check in console , object is created in the console not here in the code (thsi is the propery of data attribute , i guess)
        const productId = button.dataset.productId;   // used data attribute to get the product name
        addToCart(productId);
        updatecartQuantity();
    });
} );