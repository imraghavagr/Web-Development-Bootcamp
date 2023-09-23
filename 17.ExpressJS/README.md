# Express.js Framework - A framework built on top of Node

## Basic Introduction:

- There are many programming languages for building backend, and in addition to languages, there are 
also a bunch of frameworks that we can choose e.g. node.js, django, asp.net etc 
- The framework that uses JavaScript is Node.js, but strictly speacking Node.js is not a js framework, but it is a js runtime environment, i.e. it allows us to run js on our computer. 
- Express on the otherhand is a js framework that allows us to create our backend using js. 
- Node and Express combined is how most professional developers built their website backend. 

## Why Express.js when node.js is already present?

- We can use Node to do a lot of things like creating backend, make desktop applications or anything. Node is used to do a lot of things and thus it is not specialised for creating website backend.

- Scredriver Analogy: Consider that we want to tighten a screw (consider it js). To do this we can use node.js (a normal screw-driver) which will take a lot of time, or else we can use an spcialised electric screw-driver (express.js). 

- Express allows us to use js and node to create our website backend and its make the process so much easier and quicker. 

- Some advantages of using ExpressJS:
    1. Inhances Readability.
    2. We need to write less code.
    3. Ability to add Middleware.


## What is Backend Again? 

The following things combined is called a Website Backend. 

Server -> Any computer. Most cases its a big and powerful computer that is on 24/7 and is listening for any requests, looking for a particular resource, like an HTML file or css or js etc. 

Application -> Written using some sort of code, and that application is running on the server computer. It could just be an index.js file 

Database ->  Not necessary for a simple backend. 

```
        FrontEnt-------------------------------------------------------------- Backend

   (user/client)             request via internet                [Database + Server + Application]
   [Client Side]                    `                                        [Server Side]

```
Sometimes this whole backend is referred as a server. 

- When a user types "google.com", this requests goes via internet to the google's server (computter) somewhere in the world. 
- On this server computer, there is an application that's running and listening for this particular request and once it finds it, it will send back this homepage(maybe index.html) and all of it goes back to the client. 
