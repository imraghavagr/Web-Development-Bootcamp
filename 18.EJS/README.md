# EJS - Embedded JS

## Why do we need EJS? 
Whis is it necessary to embed js into our html files? 

Consider the following task: 

```js
app.post("/submit", (req, res) => {
    const name = req.body["name"];
    res.sendFile(__dirname + "index.js"); 
});

<body>
    <h1>Hello <!--INSERT NAME HERE-->> </h1>
</body>

```

We want that whatever user enters in the form with method = "/submit", the name attribute should go into the h1 tag of our html document and it renders the website with the name entered by the user. 
1. When user types somthing in the "name" input and hits submit in the frontend-
2. it hits up our post route in our server and we receive that value using bodyparser middleware and then...
3. somehow we want to be able to send this information to a HTML file and insert it in there.
4. Once we have inserted it in the req place in our html doc, then, it should render in our browser and it should say "Hello Raghav".

## How to parse something from our server to be rendered into our html file? 

One easy and straightforward way is to directly insert it using $ sign while sending html text itself. 

```js
app.post("/submit", (res, res) => {
    const name = req.body["name"];
    // res.sendFile(__dirname + "index.js"); 
    //instead of sending a html file, we would need to send html from here itself. 
    res.send('<h1>Hello ${name}</h1>');
});
```
By this our code for structure is getting mixed up with code of our backend application which is a bad practice as we want seperation of concers. That is we want to separate structure (html) , style (css) and functionality (js) separately. 

*To solve this issue, we use **Templating**.*

For this we have templating languages like handlebars, pub, jinja, twig, EJS. These are different languages for various languages. For js, we use EJS. 

## How does EJS work? 

Its almost like having a little js module that can run js code inside a html file and it ends with the .ejs file extension. It is html + some js code with some different syntax. 

Inserting a for loop inside our html page. 
We need to enclose every js line of code into <% <js code here> %>
```html
<body>
    <ul>
        <% for(let i = 0; i<n; i++){ %>
            <li>
                <%= items[i] %>
            </li>
        <%> } %>
    </ul>
</body>

```

### Another problem: 
res.sendFile() is strictly used for sending static files (files that does not change). For sending dynamic files we will have to use res.render() method. 

```js
app.post("/submit", (req, res) => {
    //first specify the file that we want to render
    //then, we can pass some js object to pass key value pair. 
    res.render("index.js", 
    { name: req.body["name"]}
    ); 
});

<body>
    <h1>
        Hello <%= name %> 
    </h1>
</body>

```

> Install EJS language support plugin to our vs code for syntax hylighting and autocomplete etc. 