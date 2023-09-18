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
$("button").click(function() {
    $("h1").css("color","purple");
});

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

To convert our code into minified version we can use the [minifier website](https://www.minifier.org/)

Standard version : jquery.js : Human readable
Minified version : jquery.min.js : For the browser

## Selecting Elements with jQuery: 

```js
    document.querySelector("h1") //using pure js 
    $("h1") //using jquery

    document.querySelectorAll("button") //using pure js
    $("button") // using jquery. There is no difference between selecting one or selecting many in jquery
```

## Manipulating Styles with jQuery: 

```js
    $("h1").css("color", "green"); // to manipulate css properties, here,  color. 

    console.log($("h1").css("color")) // this will give us the current color 

    //Two arguments for setting the value and single argument for getting the value. 
```

To keep all css code in styles.css file itself, we can create a separate class for something, lets say a big heading and add that class in real-time to any element using jquery as well as we did with js.

```css
.big-heading{
    font-size: 10rem;
    color: green; 
}
.margin-50{
    margin: 50px;
}
```
```js
    //to add class
    $("h1").addClass("big-heading")

    //to remove class 
    $("h1").removeClass("big-heading")

    //to add or remove multiple classes at once
    $("h1").addClass("big-heading margin-50");
    $("h1").removeClass("big-heading margin-50");
```

To check if an element has a particular class or not 
```js
    $("h1").hasClass("margin-50"); //will return a boolean value.
```
```
//getting the value of the attribute
console.log($("img").attr("src"));

//setting the value of the attribute
$("a").attr("src", "https://www.yahoo.com"); 

//the above will select all the anchor tags from our website and change it to yahoo.com

//A class is also a html attribute
console.log($("h1").attr("class")) // will print all the classes associated with the h1 tag 

```

## How to add an event listener using jQuery:

```js

$("h1").click(funcion(){
    //this callback function will be clicked whenever h1 will be clicked 
    $("h1").css("color", "purple");
})
```

//in js we were using a for loop for adding an event listener to all tags of a type. 
//that can be done quickly using jquery as follows: 

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
$("button").click(function() {
    $("h1").css("color","purple");
});
```
we can find about all the events at dom events reference of mdn 

There is a further short way of adding events by using method - on

```js
$(document).on("mouseover", function(){
    // do anything 
})
```

## Adding and Removing Elements with jQuery in realtime

Adding: 

```js

//before ->  will create the html element before the selected element. 
$("h1").before("<button>New button</button>");

//after -> will create the html element after the selected element. 
$("h1").after("<button>New button</button>");

//prepend-> will add the new html alement inside the selected element, just at the start of it
//after the opening tag of selected element and before the content. 
$("h1").prepend("<button>New button</button>");

//append-> will add the new html alement inside the selected element, just at the end of it
$("h1").append("<button>New button</button>");

```

Removig:
```js
$("button").remove(); //will get rid of all the buttons in our current webpage
```

## Website Animations with jQuery:

```js
//hide - sudden disappearance
$("h1").on("click", function(){
    $("h1").hide();
});

//show - sudden appearance
$("h1").on("click", function(){
    $("h1").show();
});
//toggle - ek baar click krne par hide hoga fir dossri baar me show hoga and so on 
$("h1").on("click", function(){
    $("h1").toggle();
});

//fadeout  - progressive disappearance. 
$("h1").on("click", function(){
    $("h1").fadeOut();
});
//fadein - progressive appearance
$("h1").on("click", function(){
    $("h1").fadeIn();
});
//fadeToggle
$("h1").on("click", function(){
    $("h1").fadeToggle().
});

//slideUp - collapse 
$("h1").on("click", function(){
    $("h1").slideUp().
});

//slideDown - uncollapse
$("h1").on("click", function(){
    $("h1").slideDown().
});

//also slideToggle
$("h1").on("click", function(){
    $("h1").slideToggle().
});

```

For more control we can create our own annimations also using .animate()

```js
$("h1").on("click", function(){
    $("h1").animate({opacity: 0.5}) //50% of the original value 
    //we can only add css rules which has a numeric value inside the curly braces. 
});

//for more than one animations - use chanining 
//sab ek ke baad ek in order hoga 
$("h1").on("click", function(){
    $("h1").slidUp().slideDown().animate({opacity : "50%"});
});
```