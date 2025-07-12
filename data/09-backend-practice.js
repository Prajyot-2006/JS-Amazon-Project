/*
https://supersimplebackend.dev/hello
https://supersimplebackend.dev/products/first
https://supersimplebackend.dev ➡ /
Each URL path will give us a different response.

/hello , /products/first , are the url path's and if no url path is there then the URL path is /


we can send a request to these url paths and each url path will give us a different response
lets try sending request to these URL path's
*/




export const c = new XMLHttpRequest();  
c.addEventListener('load', () => {  
    console.log('2nd About URL path ',c.response) 
}); 
// c.open('GET', 'https://supersimplebackend.dev/hello')   
c.open('GET', 'https://supersimplebackend.dev/products/first')   // this contains the details of the 1st product of the amazon project
//c.open('GET', 'https://supersimplebackend.dev/products/first') his contains the details of all product of the amazon project
//c.open('GET', 'https://supersimplebackend.dev/images/apple.jpg')  this contains html 
c.send(); 

c.response  

// Note : the o/p which we are seein in the cobnsole is of JSON pattern its an JSON string 
// goto supersimplebackend.dev/documentation