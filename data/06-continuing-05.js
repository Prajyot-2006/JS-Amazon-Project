// but making lots of cart gets our code messy and very lengthy , so we use a function to create multiple objects or multiple cart

function Cart(localStorageKey) {
    const cart = {  // object
        cartItems: undefined,
        loadFromStorage: function() {    // function inside an object = method 
            this.cartItems = JSON.parse(localStorage.getItem(localStorageKey)) || [  // however we have a small issue, if we change the name of the object up here , this fn will no longer work , this keyword will give us the outer object , we are currently loading from the localstorage cart however our original cart was also loading from localstorage cart , so lets change this also(cart-oop) so that we dont affect the og cart
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
        },

        saveToStorage: function() {
            localStorage.setItem(localStorageKey , JSON.stringify(this.cartItems))  // this gives us the outer object which is = cart 
        },

        addToCart(productId){   // shortcut for addToCart: function(productId)
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
        },

        removeFromCart(productId){
            const newCart = [];
            this.cartItems.forEach( (cartItem) => {
                if(cartItem.productId !== productId){
                    newCart.push(cartItem);
                }
            });
        this.cartItems = newCart;
        this.saveToStorage();
        },

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
    };
    return cart;
}

export const cart = Cart('cart-oop');  // why 4(cartItems) bcoz in previous code (code : 1) localstorage value is same cart-oop and that time i guess we added 2 more products in cart 
export const businessCart = Cart('business-cart');  // new thats why 2 products 

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);  


/*
Object-Oriented Programming
= organizing our code into objects
  (tries to represent the real world)

Class
= help us generate these objects
*/