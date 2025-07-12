/* In this file we learned about class , classes are used to create objects 
Object-Oriented Programming
= organizing our code into objects
  (tries to represent the real world)

Class
= help us generate these objects
*/
class Cart {  // class is used to generate the objects , we will generate the objects using this class 
    cartItems = undefined;
    localStorageKey = undefined;
    loadFromStorage = function() {   
            this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey)) || [  
                {  // this keyword is a OOP keyword , that points to the outer object 
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

const cart = new Cart();  // we use new in front of it for calling a class, this generate a new object using our class(Cart) and this new objects will have this properties and methods that we added in class(Cart)
const businessCart = new Cart();  // we use new in front of it for calling a class


cart.localStorageKey = 'cart-oop'
businessCart.localStorageKey = 'business-cart'

cart.loadFromStorage();
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);

console.log(businessCart instanceof Cart);  // this will check if this obj was generated from this class(Cart) , results in true 