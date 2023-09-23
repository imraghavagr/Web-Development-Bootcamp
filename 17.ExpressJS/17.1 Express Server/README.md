# Steps to create an Express Server 

1. Create a directory. 
    ```
    mkdir "directory name"
    ```
2. Create index.js file. 
    ```
    touch index.js
    ```
3. Initialise NPM. 
    ```js
    npm init

    ```
4. Install the Express package. 
    ```
    npm i express
    ```
5. Write Server application code in index.js. 

    ```js
        import express from "express"

        //create an app using express object 
        const app = express(); 
        const port = 3000; 

        //there is a method on this app called listen(), where we need to specify two things
        //port number, and callback function
        app.listen(port, () => {
            console.log('Server is running on port ${port}.');
        });

    ```
6. Start the server. 
    ```js
        node your_app.js
    ```
    To stop the server use cntrl + C

To view the server, go to browser and type "localhost:300"

## What exactly is localhost? 

Localhost is simply when we don't have a server on the internet and instead we want to host our server locally, i.e. making our own computer the server of our website's backend. 

"https://localhost:3000"

This 3000 is the port number. 

### What's a port number? 

Imagine each port as a door in our server computer and each door these doors have an address. There can be many such doors. When we specify localhost:3000, it goes and looks into the port/door with an address 3000 and though this door it can reach our server computer and find the application that is listening for requests. 

Why are there many ports? 
Because it has to be able to listen for different incoming requests. 

>> To view which ports are running right now: 

```
    //windows:
    netstat -ano | findstr "LISTENING"

    //Mac/Linux: 
    sudo lsof -i -P -n | grep LISTEN
```