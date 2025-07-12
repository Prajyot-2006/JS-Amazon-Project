import { addToCart , cart , loadFromStorage} from "../../data/02-cart.js";
// best practice of testing = test each condition of an if-statement
describe('test suite : addToCart' , () => {  // this describe fn is provided by jasmine and it creates a test suite 
    it('adds an existing product to the cart', () => {//this creates a test , to name the text we gonna give it a string
        spyOn(localStorage, 'setItem');

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([{
                productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
                quantity: 1,
                deliveryOptionId: '1'
            }]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1)  //in jasmine instead of creating an if statement and display it in the result ourselve ,jasmine provides us another fn to do all of these lets us compare value to another value , expect gives us an object an this obj has many methods to do comparision
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(2)
    })

    it('add a new product to the cart', () => {
        spyOn(localStorage, 'setItem')

        spyOn(localStorage, 'getItem').and.callFake(()=>{
            return JSON.stringify([]);
        });
        loadFromStorage();

        addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
        expect(cart.length).toEqual(1)  //in jasmine instead of creating an if statement and display it in the result ourselve ,jasmine provides us another fn to do all of these lets us compare value to another value , expect gives us an object an this obj has many methods to do comparision
        expect(localStorage.setItem).toHaveBeenCalledTimes(1);
        expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6')
        expect(cart[0].quantity).toEqual(1)
    })
})




/* describe(description, specDefinitions)
Create a group of specs (often called a suite).
Calls to describe can be nested within other calls to compose your suite as a tree.
*/
/*it() defines a single test (called a spec).

Takes a description, a test function, and optional timeout.

Inside, you write one or more expectations to check the code.

If all expectations pass, the test passes; if any fail, the test fails.

The word it helps form a readable sentence with the description. */