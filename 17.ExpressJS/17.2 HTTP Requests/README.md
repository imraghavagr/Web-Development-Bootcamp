# HTTP Requests

Learn the language to make requests to your server. 


## HTTP -> HyperText Transfer Protocol 
HyperText -> (as in HTML) Hypertext is text displayed on a computer display or other electronic devices with references to other text that the reader can immediately access.

Transfer Protocol -> Think it as a language that allows the computers to talk to each other across the internet. 

## Request Vocab: GET, POST, PUT, PATCH, DELETE

1. GET: **Request a resource from ther server**. That resource could be a website, it could be some piece of text, it could be a piece of data from the database of the server. We are getting something from the server when we make our HTTP request using GET keyword. 

2. POST: **Seding a resource to the server**. This could be a piece of information like if we have a form to sign up to our website, then their email and password will be sent to our server. 

3. PUT: It is an update method. Replace a resource with whatever we are sending over. 

4. PATCH: Update method. Patch up a resource. 

*Lets say we buy a bycycle from amazon and when we got the cycle, we checked that one of the tyres is broken. Now when we tell amazon that you have shipped me a broken product, they have two options, first is that they use a PUT request to give us an entirely new bycycle and the other option they have is a PATCH request, where in this case, they only send you the functioning wheel replacement and we patch up the broken bycyle.*

5. DELETE: Deletes resources either from the server or from the database. It is a request from the client side computer to the server side computer saying that there is something needed to be deleted. 