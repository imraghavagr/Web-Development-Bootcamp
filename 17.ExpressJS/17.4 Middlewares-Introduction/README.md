# Introduction to Express Middlewares:

> The man in the middle | Using body-parser together with HTML forms

```


            request                            request           routes
    Server   ---->          MiddleWares        ----->
                                                            [GET, POST, PUT, PATCH, DELETE]

```

When a request comes in to the server and before it gets processed by all of the route handlers, there is somthing in between namely the middleware that can work with these requests before they get
processed and reach their final destinations. 

## What kind of things can middleware do? 

1. Preprocess the request. When we know that a request is going to multiple handlers, maybe it could be processed by GET, PUT or POST requests. This intermediate stage where we have our middleware can actually go ahead and change aspects of the requests or perform various functions on that request before it goes to its final routing. 

2. We can use middlewares for logging the requests. How long does the request take to come to? What type of request? What is the status of the request being handled? 

3. For authentication. Before we let the request through to our backend handlers, we can see if that request actually came from a client that is authorized to make that request, say, if somebody wants to go and change facebook db to call its handbook, we need to make sure that this user is authorized to do it. 

4. For handling errors: We can process any errors in the requests. We can identify them and handle those eorros before they go through to the handlers as well. 

## Body Parser - A body parser middleware.

1. It is a very common used middleware in node and epress for backend engineering. 
2. A body parser middleware - It can look into the requests body, before that request goes to its handler. 
3. This basically gives our requests a new property called the Body property. It is very commonly used to handle form data.