import express from "express";
import bodyParser from "body-parser";

const port = 3000; 
const app = express(); 
var tasksList = []; 

const date = new Date(); 
let year = date.getFullYear(); 
let monthNum = date.getMonth(); 
let day = date.getDate(); 
const full_day_name = date.toLocaleDateString('default', { weekday: 'long' });

console.log(monthNum);
const monthMapping = {
    0: "January", 1: "February", 2: "March", 3: "April", 4: "May", 5: "June", 
    6: "July", 7: "August", 8: "September", 9: "October", 10: "November", 11: "December"
}

console.log(date);
console.log(full_day_name)



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
    if(newTask.length > 0){
        tasksList.push(newTask);
    }    
    const data = {
        newTasksList : tasksList, 
        dayName : full_day_name, 
        day : day, 
        monthName : monthMapping[monthNum]
    };
    res.render("index.ejs", data);
});
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
 