# Passing Data to EJS Templates

## Passing data from Server to EJS:

```js
// index.js
app.post("/submit", (req, res) => {
    //first specify the file that we want to render
    //then, we can pass some js object to pass key value pair. 
    const data = {
        name : req.body["name"]
    };
    res.render("index.js", data); 
});

// index.ejs
<body>
    <h1>
        Hello <%= name %> 
    </h1>
</body>

```

### What if there is no Data? 
```js
// index.js
app.post("/submit", (req, res) => {
    res.render("index.js"); 
});

// index.ejs
//Here we ara expecting a data called 'name', but it's not send by our server. 
//In that case we need to check if locals.fruits exists or not before using it. 
//locals variable always exists.. it is sent by our render()
<body>
    <% if (locals.name) {%>
    <h1>
        Hello <%= name %> 
    </h1>
    <%}%>
</body>
```

## Passing data from EJS to Server:
