import express from "express";
// import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const port = 3000; 
const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));
const d = new Date(); 

var dayNumber = d.getDay(); 
// var dayNumber = 1; 
var dayMapping = {
    0 : "Sunday", 
    1 : "Monday", 
    2 : "Tuesday", 
    3 : "Wednesday", 
    4 : "Thursday", 
    5 : "Friday", 
    6 : "Saturday"
}; 
var greet_message; 

console.log(dayNumber);

if(dayNumber == 0){
    greet_message = "have fun!";
}
else{
    greet_message = "word hard!";
}

app.get("/", (req, res)=>{
    res.render(__dirname + "/views/index.ejs", 
    {
        day : dayMapping[dayNumber], 
        message : greet_message
    }
    );
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});