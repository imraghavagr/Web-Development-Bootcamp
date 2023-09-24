import express from "express";
import bodyParser from "body-parser";
/*
When our server is hyosted on a cloud computer, when its
no longer locally hosted, as is the case for most servers. 
Then, in order to figure out the directory name where the 
file lives in, it takes little bit of work. 
For this we have to use "path" and "url" package
Following three lines are used for this purpose
*/
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;


//mount the middleware using expressapp.use() method 
app.use(bodyParser.urlencoded({extended : true}));
//because of the above line .. our req will get a new attribute called 'body'

//write a post (./submit) handler
app.post("/submit", (req, res) => {
  console.log(req.body);
});
app.get("/", (req, res) => {
  //file that we need to send is index.html placed inside
  //the public folder.
  // console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
