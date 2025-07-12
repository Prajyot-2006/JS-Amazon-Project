// to send an HTTP message we gonna use a class called XMLHttpRequest (this is a built-in class by JS)

// we will generate an object using this class 
export const a = new XMLHttpRequest();  // this creates a new HTTP message to send to the backend ; message = request
a.open('GET', 'https://supersimplebackend.dev')  // to set it up we'll do like this 
/* 
1st parameter : type of HTTP message 
GET : get some infor from backend (Types of requests - GET , POST , PUT , DELETE)

2nd parameter : where to send this HTTP message (using http we can send a message to any computer thats connected to the internet) , to locate another computer on the internet we need to use a URL(u know what URL is)
URL : 
https://amazon.com
https://youtube.com
https://supersimple.dev

http means we are using http to communicate with this computer 
the s after the http means we are using a secured version of http
the 2nd part means amazon.com or youtube.com ia a domain name -> it points to another computer on internet
so amazon.com points to one of amazon's backend computer 
youtube.com points to one of youtube's backend computer 
supersimpledev.com points to one of supersimpledev's backend computer 
*/

// to send a message 
a.send(); // so this creates a new http message and sets it up and then send's this message across the internet to supersimple.dev's backend computer located at https://supersimplebackend.dev

/* Note : do isnpect + network to see all the messages that we sent 
this sends the request across the internet to supersimple's backend and then supersimple's backend recieves the message with this request , it will then send back a message which is called a response
to see the response from supersimple's backend we can open the response tab to see the rsponse 
we can see it responded with Hello! This is SuperSimpleDev's backend. and a documentation page that we can checkout 

Each request that we make will get one response from the backend , this is known as response cycle , it is always 1 request 1 respond
*/