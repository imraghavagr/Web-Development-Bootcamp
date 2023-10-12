# JSON - JavaScript Object Notation

## What? 
It's a way to format data that can be sent over the internet in a radable but also effficient way. As the name suggests, it is structured after a js object. 


## JSON vs JS Object


JSON

```js
    {
        "name" : "Raghav Agarwal", 
        "city" : "Banda",
        "education" : [
            {
                "degree" : "Intermediate",
                "college" : "St. Mary's",
            }, 
            {
                "degree" : "Integrated Masters of Technology", 
                "university" : "VIT",
            },
        ],
        "registration-number" : "19MIM10024"
    }
```

JS Object 

```js
    const raghav = {
        name : "Raghav Agarwal", 
        city : "Banda",
        education : [
            {
                degree : "Intermediate",
                college : "St. Mary's"
            }, 
            {
                degree : "Integrated Masters of Technology", 
                university : "VIT"
            }
        ],
        registration_number : "19MIM10024"
    };
```
In js, we have keys which are not strings, but in json we have keys which are represented as a string. 

```js

const wardrobe = {
    doors : 2, 
    drawers " 2,
    color : "red"
}

/* Now lets say we want to transfer this wardrobe to our home from the furniture shop, it will be difficult as it has a large size, instead we will convert it to json and then transfer it. */

{"doors":"2","drawers":"2","color":"red"}

```
Now instead of large js object, we have a string based flatline kind of JSON. 
JSONs can be sometimes hard to read, because it could be in its flatpack form, we can use various json visualizers present over net to illustrate it. 

## Serialization: 
If we want to send our JSON across the internet, for some reason, we will need to do serialization first. That is turning a js object into a json/flat pack . 

**We can do this using stringigy method present in JSON module.**

```js
    const jsonData = JSON.stringify(data); 
```

And for the opposite, we use JSON.parse method 

```js
    const data = JSON.parse(jsonData);
```