# Node.js

## **What is Node.js?**
Understanding the runtime and the advantages of Node.js

*"Node.js is an asynchronous event-driven JavsScript runtime, it's designed to build scalable network applications."*

Lets break down the above definiton: 

**JavaScript runtime:** 

We can run js in the browser only. But with node.js we can run it in our local machine also. Therefore we say that it acts as a js runtime. 

**Synchronouse and asynchronous**: 

This means that our js code doesn't have to do everything sequentially. Usually the code runs from top to bottom in a synchronous way. Any synchronous event will hold up the resources untill that event is completed. 

Lets understand by the amazon parcel deleivery analogy: 
Synchronous: Once we placed the order, we would not be able to do anything else untill that parcel is deleivered. 

Asynchronous event driven: Once we placed the order, node.js will initiate this order and instead of having to wait for it, it can free all the resources. And only when the event of the parcel deleivery will happen does it then continue to run the next bits of code. 
That is we can put some code together to call it an event.

> In summary, we need node because it allows us to build an application on a computer using js. And application is a key aspect of our backend which will be running on a server (a computer) which is not a browser and node.js makes it happen. 

## Why node, when there are lots of other backend frameworks available? 

1. JS FullStack:

    Because our frontend is written using JS + html + css and our backend can also be written in js. 
    That is it makes JS FullStack. (One rules them all kind off)

2. Scalable - Node.js allows easy scaling of applications.

3. Non-blocking - Its fast and non-blocking because of its even driven asynchronous nature. 

4. Huge Ecosystem - Really vibrant community which has contributed heavily to node package manager. It has great resources and documentation. Most of the major tech companies use node.js. 

## Using Node.js

**Node REPL -> Node Read Eval Print Loop**

- This is a computer environment where user inputs are read and evaluated, and then the results are returned to user. 
- To initiate Node REPL, type command 'node' in terminal.
- This is now are js runtime environment, we can write and execute any js logic here.
- To exit type .exit or cntrl+c

**Run a js file using node** 
node filename.js

