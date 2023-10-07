import express from "express";

const port = 3000; 
const app = express(); 

//enable access of static files placed inside public folder
app.use(express.static("public"));

//handle homepage get request
app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 