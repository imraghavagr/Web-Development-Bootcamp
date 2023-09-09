# Ways to make a website responsive

1. Media Queries
2. CSS Grid
3. CSS Flexbox
4. External Frameworks e.g. Bootstrap

## Media Queries
We put this instead of the selector in our css 
eg.

```css
@media (max-width: 600px) {
    /* CSS for screens below or equal to 600px wide */
}
```
>> The above means instructs that - Look into inside these brackets for the screens below or equal to 600px wide, i.e., everything with width <= 600px will use the css defined in this block of code. 

We can define various media queries for different ranges of screen width. 
