import express from "express";

const app = express(); 
const port = 3000; 

function logger(req, res, next){
  console.log(req.method);
  console.log(req.url);
  next();
}

app.use(logger);

app.get("/", (req, res) => {
  res.send("<h1>How are you?</h1>");
});
app.listen(port, ()=>{
  console.log(`server running on port ${port}`);
});