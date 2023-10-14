import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;
const api = "https://bored-api.appbrewery.com";
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get(api + '/random');
    
    const result = response.data;
    // console.log(result);
    const data = {
      activity : result.activity, 
      type : result.type, 
      participants : result.participants, 
    }
    res.render("index.ejs", data);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

function randomIndex(arr){
  return arr[(Math.floor(Math.random() * arr.length))]
}

app.post("/", async (req, res) => {
  try{
    // console.log(req.body);
    let act_type = req.body.type;
    let participants_cnt = req.body.participants;

    // if(!act_type) act_type = "";
    // if(!participants_cnt) participants_cnt = "";

    let requestURL = api + "/filter?type=" + act_type +"&participants"+"="+participants_cnt;

    console.log(requestURL);

    // Step 2: Play around with the drop downs and see what gets logged.
    // Use axios to make an API request to the /filter endpoint. Making
    // sure you're passing both the type and participants queries.
    const response = await axios.get(requestURL);    
    const result = response.data;

    let idx = Math.floor(Math.random() * result.length);
    console.log(idx);

    const data = {
      activity : result[idx].activity, 
      type : result[idx].type, 
      participants : result[idx].participants, 
    }
    res.render("index.ejs", data);
  }catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});