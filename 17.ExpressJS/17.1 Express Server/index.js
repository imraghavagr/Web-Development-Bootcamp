import express from "express"

//create an app using express object 
const app = express(); 
const port = 3000; 

//there is a method on this app called listen(), where we need to specify two things
//port number, and callback function
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

