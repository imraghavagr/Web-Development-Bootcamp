import express from "express";
import bodyParser from "body-parser";

const port = 3000; 
const app = express(); 
var tasksList = []; 



//enable access of static files placed inside public folder
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//handle homepage get request
app.get("/", (req, res) => {
    tasksList = [];
    res.render("index.ejs");
});
app.post("/", (req, res) => {

    let newTask = req.body["newItem"];
    //add new item into the tasksList 
    tasksList.push(newTask);
    const data = {
        newTasksList : tasksList
    };
    res.render("index.ejs", data);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 