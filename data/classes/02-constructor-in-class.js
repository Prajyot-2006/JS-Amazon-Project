class Cart {  
    cartItems = undefined;
    localStorageKey = undefined;
    // setup code // after generating each objects we also ran the setup code , so thats how the constructor works , everytime we enerate the object it will run the code inside it (constructor)
    constructor(localStorageKey) { // In Object-Oriented Programming (OOP), a constructor is a special method inside a class that automatically runs when you create an object from that class.
        this.localStorageKey = localStorageKey  // however there is 1 issue , each object that we create will run this constructor 
        this.loadFromStorage(); // this means the outer object
    }

    loadFromStorage = function() {   
            this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) || [  
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
            localStorage.setItem(this.localStorageKey , JSON.stringify(this.cartItems))  
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

const cart = new Cart('cart-oop');  // when we call the class btwn these brackets we can put the parameters for the constructor
const businessCart = new Cart('business-cart');   // note : when we set parameter while calling a class , that parameter only goes to the constructor not in any other function or method

console.log(cart);
console.log(businessCart);

// Note : constructor will only run when u create objects from class , or inshort constructor will run after creating object

// in previous file's code we have to run the function's variable outside the class 

/* 
constructor(localStorageKey) { // In Object-Oriented Programming (OOP), a constructor is a special method inside a class that automatically runs when you create an object from that class.
        this.localStorageKey = localStorageKey  // however there is 1 issue , each object that we create will run this constructor 
        this.loadFromStorage(); // this means the outer object
    }
this code is nothing but :- this
cart.localStorageKey = 'cart-oop'
businessCart.localStorageKey = 'business-cart'

cart.loadFromStorage();
businessCart.loadFromStorage();

we usually do this at bottom after creating a object , when we create a object ,check previous code for better understanding ,so thats why we put this default code into constructor for running automaticlayy when creating an object 
*/