# There are 3 ways to insert js into our html
1. Inline
2. Internal 
3. External 

## Inline - By simly adding an attribute into the html tag
```html
<body onload = "alert('hello');">
    <h1>Raghav</h1>
</body>
```
When the body section will be loaded up it will follow all the instructions given there. 

## Internal js
using a script tag - everything inside the script tag will be the js code 
```html
<body>
    <h1>...</h1>
    <p>...</p>
    <script type = "text/javascript">
        alert("How are you?");
    </script>
</body>
```