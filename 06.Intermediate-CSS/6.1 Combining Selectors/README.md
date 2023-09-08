# Combining Selectors 

## Different ways to combine CSS selectors: 

1. ### Group Rule

    This grouping will select all the selectors mentioned in the group. 
    To mention various selectors together in a separate them by a ','.

    ```css
    selector1, selector2 {
        color : bluevoilet
    }
    ```
2. ### Child 

    We can use '>' (right angle bracket) in order to select a child of another selector. 
 
    ```css
    selector1 > selector2{
        color: firebrick;
    }
    ```
    - In the aboe eq. selector1 is parent and selector2 is the child 

    - This relationship is only one level deep. 
    The child should be direct child. 

3. ### Descendant 

    Descendant = Apply to a descendent of left side.

    ```css
    selector1 selector2{
        color: firebrick;
    }
    ```

    Apply to all descendant of type selctor2 of selector1  

4. ### Chaining Selectors 

    Chaining = Apply to instances where all the selectors are true

    ```css
    selector1selector2{
        color: firebrick;
    }
    ```

    eg.

    ```html 
    <h1 id = "title" class = "big heading">Hello World</h1>
    ```
    ```css
    h1#title.big.heading{
        colors : blue; 
    }
    ```
    > The above means that we are looking for a h1 element with id = "title" and class = big and class = heading 

    Always start with the element than chain it with id or class. 

5. ### Combining Combiners

    We can also combine various combiners that are discussed above. 

    ```css
    selector1 selector2selector3{
        font-size: 0.5rem;
    }
    ```
    > Above, we have first used descendant and than chaining. 