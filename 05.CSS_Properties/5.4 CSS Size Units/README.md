# CSS Size Units:

## Types of Units
1. Absoute e.g. 1 cm
2. Relative e.g. 50%

## Relative units:

1. ### Percentage (%):
    Will take x % of the immediate parent
    for eg.
    
    ```css
    .box{
        width : 50%;
    }
    ```
    ``` html
    <body>
        <div class = "box">
            <h1>My name is Raghav Agarwal</h1>
        </div>
    </body>
    ```

    Now the immediate parent of .box is body. So when we do width = 50%, it will be 50% of the body i.e. the entire screen.

2. ### Viewport width and height:

    *viewport:* Viewport is the area whichever is seen on the UI .. full window jo dikh rahi hai 

    - vw -> viewport width
    - vh -> viewport height

    height: 100vh
    This means that the height of the element will be 100% of the veiewport height.
    width: 50vw
    This means that the height of the element will be 100% of the veiewport width.

3. ### em:

    Dependent upon the font size of the immediate parent, in the case of typographical properties like font-size, and font size of the element itself, in the case of other properties like width. 

    10em -> 10*(size of immediate parent)

    ```css
    .container-2{
        font-size: 10px;
    }
    .box{
        font-size: 10em;
        /* iska parnet container-2 hai jiska font-size hai 10px
        so, 10em means 10*10 = 100px */
    }
    ```

    ```html
    <div class="container-2">
        <div class="box">
            How are you? 
        </div>
    </div>
    ```
4. ### rem:

    Relative to the root element that is will take properties according to the html tag as it is the root of every element.



## Absolute Units

1. pixel (px):

    1 px -> 1 pixel is 1/96th of an inch -> 0.26 mm 

2. point (pt):

    1 pt -> 1 point is 1/72nd of an inch -> 0.35 mm 

