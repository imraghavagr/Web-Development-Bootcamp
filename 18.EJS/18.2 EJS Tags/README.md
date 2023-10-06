# EJS Tags

There are various EJS tags present: 


1. <%= variable %> : JS Output. Whatever is placed bw '<' and '>' will treated as JS and in addition there will be an output that will be put there in the HTML or ejs file. 
2. <% %> : JS execute. Executable JS code interpretted inside an ejs file. There will be no output given here.  
3. <%- %> : Render HTML. 
4. <%% %%> : Show <% or %>
5. <%# This is a comment%> : Stop Execution. 
6. <%- include("header.ejs")%> : Insert another EJS file 

## Running JS in HTML example: 
Check out index.js and index.ejs files for example.