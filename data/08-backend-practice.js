// previouly we were viewing the response in the network tab but we can actually get the response in our code and then do something with that response
export const b = new XMLHttpRequest();  
b.addEventListener('load', () => {  // this function runs after the response loaded
    console.log('1st About loading',b.response) // this will not be undefined , it will contain the response hat we saw in network tab , this response is a string , we can store it in a variable 
}); 
b.open('GET', 'https://supersimplebackend.dev')   
b.send(); // it just send's the request and immideately goes to the next line
// after we send a reques we can get the respond using a property called a.response
b.response  // however there is a slight problem doing this , we send a req to the backend it takes time to travel across the internet  , so a.response will be undefined at first 
// response might come back later in the future but we dont have access to it at first time so in this situation inorder to get this response we need to wait for the response to comeback 1st and then we can access .response

/*
1 thing u might be wondering why do we put the eventlistener at the top 

b.addEventListener('load', () => {  // this function runs after the response loaded
    console.log(b.response) // this will not be undefined , it will contain the response hat we saw in network tab , this response is a string , we can store it in a variable 
});
1st we need to set up the eventlistner and then trigger the event or send the request 

*/