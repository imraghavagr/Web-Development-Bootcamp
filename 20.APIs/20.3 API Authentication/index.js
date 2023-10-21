import express from "express";
import axios from "axios";
import e from "express";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "imraghavagr";
const yourPassword = "nahibataunga";
const yourAPIKey = "5253e92e-3dd2-4f30-b7d7-0b13fa5087e6";
const yourBearerToken = "8bf700c3-5a3b-44b9-9782-b84994d2fcfe";
const api = "https://secrets-api.appbrewery.com";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try{
    const response = await axios.get(api + '/random');
    // const result = response.data; 
    // console.log(response.data);
    const data = {
      content : JSON.stringify(response.data)
    }
    res.render("index.ejs", data);

  }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  try{

    const userDetails = {
      username: yourUsername,
      password: yourPassword
    };

    const response = await axios.get(api + '/all', {
                      auth: userDetails,
                      params : {page : 2}
                      });
    const data = {
      content : JSON.stringify(response.data)
    }                 
    res.render("index.ejs", data);

  }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.
  try{

    const userDetails = {
      username: yourUsername,
      password: yourPassword
    };

    const response = await axios.get(api + '/filter', {
                        params : {
                            score : 8,
                            apiKey : yourAPIKey,
                        }
                      });
    const data = {
      content : JSON.stringify(response.data)
    }                 
    res.render("index.ejs", data);

  }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }

});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  try{

    const userDetails = {
      username: yourUsername,
      password: yourPassword
    };
    const config = {
      headers: { Authorization: `Bearer ${yourBearerToken}` }
    };
    const response = await axios.get(api + '/secrets/2', config);
    const data = {
      content : JSON.stringify(response.data)
    }                 
    res.render("index.ejs", data);

  }catch (error){
    console.error("Failed to make request:", error.message);
    res.render("index.ejs", {
      error: error.message,
    });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
