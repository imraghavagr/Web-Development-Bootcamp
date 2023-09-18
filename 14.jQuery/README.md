# jQuery -  The JavaScript library that will prevent our fingers from breaking. 
- Developed by John Resig

# Introduction:

- There are various js libraries, but the most used one is jQuery. 
- It is a library which we can incorporate in our own projects to use the code that somebody else wrote. 
- jQuery allows us to reduce the javascript code 

```js
    document.querySelector("h1") //in js 
    //we are querying for an h1 tag element in our document, this can be done by jQuery as follows
    jQuery("h1");
    //or we can even write the shorthand way 
    $("h1");
```

Using jQuery we can convert the below code
```js
for (var i = 0; i<document.querySelectorAll("button").length; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        document.querySelector("h1").style.color = "red'; 
    });
}
```
To this: 
```js



```

## How to incorporate jQuery into our websites:

We can go to jquery.com and incorporate the CDN (Content Delievery Network) link given there in our project. 
Use google cdn. (faster load rate because maybe when the user went to other google sites, the cdn might got cached already. So, this time it would be loaded faster).

```html
<body>
    <h1>...</h1>
    <p>...</p>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src = "index.js"></script>
</body>
```
**jQuery script link is always placed just before our js script link.**


## How Minification Works to Reduce File Size

We can remove all the spaces, new line chars and comments to reduce the file size of our script, such that it can be loaded more faster. 

To convert our code into minified version we can use the [minifier website](www.minifier.org)

Standard version : jquery.js : Human readable
Minified version : jquery.min.js : For the browser