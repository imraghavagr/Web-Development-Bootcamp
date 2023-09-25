import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 3000; 
const app = express(); 
var brandName;

function generateBrandName(req, res, next){
  console.log(req.body); 
  brandName = req.body.street + req.body.pet;
  next();
}

app.use(bodyParser.urlencoded({extended : true}));
app.use(generateBrandName);

app.get("/", (req, res)=>{  
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  res.send(`<h1>Your brand name is </h1> <h2>${brandName} 🥸</h2>`);
});

app.listen(port, ()=>{
  console.log("Server running on port 3000");
});