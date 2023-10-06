# Partials and Layouts

All the static files can not be loaded when we send the response using res.render(), for it to work, place all your static files under a "public" folder in the root directory of your project and then use the following middleware to tell express where to find the static files 

```js
app.use(express.static("public"));
```

## Partials
For resuing the ejs code written earlier.. save it into a separate file and use that header one EJS tag 
eg. 
```js
<%- include(footer.ejs)%>
```