# Media Queries

We put this instead of the selector in our css . 

```css
@media (max-width: 600px) {
    /* CSS for screens below or equal to 600px wide */
}
```
>> The above means instructs that - Look into inside these brackets for the screens below or equal to 600px wide, i.e., everything with width <= 600px will use the css defined in this block of code. 

We can define various media queries for different ranges of screen width. 

1. ### max-width

```css
div{
    background-color: blue; 
    height: 200px; 
    width: 200px;
}

@media (max-width: 600px){
    /* provid override to the actual given styling */
    div{
        height: 100px; 
        width: 100px; 
    }
}
```

> Result of above code: Normally the height and width of the div will be 200px and 200px respectively. But, whenever the size of the screen will go less than or equal to 600p, its height and width will change to 100px each.

2. ### min-width

We can also use min-width alternatively

```css
@media (min-width: 600px){
    h1{
        font-size: 15px;
    }
}
```
> The above means that override the original style whenever the screen size >= 600px

3. ### Combine

```css
@media (min-width: 600px) and (max-width: 900px){
    /* Styles for screens between 600px and 900px */
}

```