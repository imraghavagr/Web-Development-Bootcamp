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

//handle different endpoints

app.get("/about", (req, res) => {
    res.send("<p>We are hitting the about endpoint</p>");
});
app.get("/contact", (req, res) => {
    res.send("<p>Raghav Agarwal <br /> 6393729709</p>");
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});