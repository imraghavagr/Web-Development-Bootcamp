# Making Server-Side API Requests with Axios

- Previously we have made requests to APIs by using POSTMAN or directly our browser. 

- But how to make requests to any API from our Server - Using Node and Axios.

```
                                  GET Request
                                ------------------->

            -----------------                       -----------------------------
            |    Our Server  |                      |    Someone  Else's Server  |
            -----------------                       -----------------------------

                                <-------------------
                                      Response
```

We can do this by two ways - 

1. Native node module (https) - Little lengthy 
2. Using Axios - Relatively easier

Like we use express to simplify the process of making our server, we use axios to simplify the process of making requests from our server to other server via a public API.


Using Axios
```js
    
    //we are using the axios package from npm 
    import axios from "axios"; 

    //use the get method to make a request to a particular API with a particular endpoint. 
    //this is promise based, so we can either use .then or async await in order to handle the response. 
    //by using async and await, we will first wait untill we get the response data and then we will render the index.ejs page 
    //also the response data returned by axios is automatically in js object notation and we do not need to explicitely convert it from JSON to js object type using json.parse method
    app.get("/", async(req, res) => {
        try{
            const response = await axios.get("https://bored-api.appbrewery.com/random");
            res.render("index.ejs", {activity : response.data});
        } catch (error){
            console.log("Failed to make request:", error.message);
            res.status(500).send("Failed to fetch activity. Please try again."); 
        }
    });
```