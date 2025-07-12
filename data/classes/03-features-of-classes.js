// we gonna learn about important features of class : private properties and private method

// private = it can only be accesed inside a class 

class Cart {  
    cartItems = undefined;  // public property
    #localStorageKey = undefined;  // private property , this means it can only be used inside this class
   
    constructor(localStorageKey) {
        this.#localStorageKey = localStorageKey; 
        this.#loadFromStorage(); 
    }

    #loadFromStorage() {   // this fn loadFromStorage should also only be used inside this class , there is no reason to code outside for calling loadFromStorage
            this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [  
                {  // this keyword is a OOP keyword 
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
    }

    saveToStorage = function() {
            localStorage.setItem(this.#localStorageKey , JSON.stringify(this.cartItems))  
    }

    addToCart(productId){   
            let matchingItem;
            this.cartItems.forEach((cartItem) => {
                if(productId === cartItem.productId){  
                    matchingItem = cartItem;
                }
            });

            if(matchingItem){  
                matchingItem.quantity++;
            }
            else{
                this.cartItems.push( {
                productId: productId,
                quantity: 1,
                deliveryOptionId: '1'
            });
            }
            this.saveToStorage();
    }

    removeFromCart(productId){
        const newCart = [];
        this.cartItems.forEach( (cartItem) => {
            if(cartItem.productId !== productId){
                newCart.push(cartItem);
            }
        });
        this.cartItems = newCart;
        this.saveToStorage();
    }

    updateDeliveryOption(productId , deliveryOptionId){
        let matchingItem;
        this.cartItems.forEach((cartItem) => {
            if(productId === cartItem.productId){  
                matchingItem = cartItem;
            }
        });
        matchingItem.deliveryOptionId = deliveryOptionId;
        this.saveToStorage();
    }

}

const cart = new Cart('cart-oop');  
const businessCart = new Cart('business-cart');   

// cart.localStorageKey = 'aaa' // this is a problem it will messup in storing localstorage , so we use private 
// cart.#localStorageKey = 'test';   error 
console.log(cart);
console.log(businessCart);

