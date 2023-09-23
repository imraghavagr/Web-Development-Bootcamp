import express from "express";
const app = express();
const port = 3000;

//add the code describing what should happen when our user is trying to GET at a homepage
// "/" means the path that we want to handle is root i.e. homepage 
//this 'req' is coming from our browser. 
// this req will be basically a hash /json kind of ds. 
app.get("/", (req, res) => {
    //how our server wants to respond to this GET request
    // console.log(req.rawHeaders);
    // res.send("Hello, World!");
    //we can also send back html 
    res.send("<h1>Hello World</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});