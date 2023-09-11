# Flexbox Sizing 

We can customize how each item inside a flexbox is sized and how they grow and shrink when we resize the window. 

## The flexbox sizing works on the following priority 

**content width < width < flex-basis < min-width < max-width**

The first thing it will check will be the min-width and max-width property that is set, then it will check if a flex-basis is set for the element. If the flex-basis is also not set then it will check for the width (if main axis is left to right) or height (if main axis if from top to bottom) property of the elements. If none of them are set than it will be according to the content width.

If no property is mentioned the value of min-width and max-width will be following: 

If content -> My name is Raghav.
The max width will be the len of this entire content such that entire sentence can be placed in one line.
The min width will be the len of the longest word present in this sentence. 

Max-width:

|My name is Raghav|

Min-width: 

My    
name  
is    
Raghav

```css
.flexContainer{
    display: flex; 
    gap: 10px; 
}
```
```css
.flex-items{
    flex-basis: 100px; 
    flex-grow: 0; 
    flex-shrink: 0; 
}
```
If we set both flex-grow and flex-shrink to 0, then the items will not grow and shrink when we resize the window.

```css
.flex-items{
    flex-basis: 100px; 
    flex-grow: 1; 
    flex-shrink: 0; 
}
```
Now, each item will first start with 100px wide and then since its allowed to grow and if there is space left in the contianer it will grow to screen size

```css
.flex-items{
    flex-basis: 100px; 
    flex-grow: 0; 
    flex-shrink: 1; 
}
```
This is the default behaviour of flex items => it will not grow but it will shrink 
Now, everytime will be set to 100px and shrinking will also be allowed till min-width. 

```css
.flex-items{
    flex-basis: 100px; 
    flex-grow: 0; 
    flex-shrink: 1; 
}
```
In this case flex-basis is basically ignored. 
It will try to take as much width as possible and will shrink to min-width if window size is reduced. 

#### Default flex-basis is auto i.e. it will give width to the items based upon the content they have. 

If we do not want it to happen, i.e. we want everything to have equal width, we can change flex-bais to 0.
```css
.flex-items{
    flex-basis: 0; /*auto if off now */
    flex-grow: 1; 
    flex-shrink: 1; 
}

/* the above can be written in shorthand form as follows */
.flex-items{
    /* flex: grow-value shrink-value basis-value */
    flex: 1 1 0; 
}

/* Because this is used so much, it can be further written as  */

.flex-items{
    flex: 1
    /* the above is equivalent to flex-grow: 1 flex-shrink:1 and flex-basis: 0 */
}
```

### Complete the following challenge to practice: 
https://appbrewery.github.io/flexbox-sizing-exercise/