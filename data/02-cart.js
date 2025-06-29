//  file contains all the code that manages the cart

export let cart =
  JSON.parse(localStorage.getItem('cart')) || [
    {
      productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
      quantity: 2,
      deliveryOptionId: '1'
    },
    {
      productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
      quantity: 1,
      deliveryOptionId: '2'
    }
  ];

// main file of the cart variable , from here we are exporting this variable into 01-amazon.js

function saveToStorage(){
    localStorage.setItem('cart' , JSON.stringify(cart))
}

export function addToCart(productId){
        let matchingItem;
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){  //note the produc.id is converted into productId in console (this is converted from kebab case to upperCase)
                matchingItem = cartItem;
            }
        });

        if(matchingItem){  // if matching item is defined that means it is truthy value then only 
            matchingItem.quantity++;
        }
        else{
            cart.push( {
            productId: productId,
            quantity: 1,
            deliveryOptionId: '1'
        });
        }
        saveToStorage();
}

export function removeFromCart(productId){
    const newCart = [];

    cart.forEach( (cartItem) => {
        if(cartItem.productId !== productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}


/*
[
    {
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 2
    },
    {
        productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
        quantity: 1
    }
        */

export function updateDeliveryOption(productId , deliveryOptionId){
    let matchingItem;
        cart.forEach((cartItem) => {
            if(productId === cartItem.productId){  //note the produc.id is converted into productId in console (this is converted from kebab case to upperCase)
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;
        saveToStorage();

}
    
        