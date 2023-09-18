$("h1").css("color", "red");
//this means select h1 on our webpage and we are changing its css, namely color to change its color

//if we have given jquery script link in the head.. 
//then we will have to write our code as follows
$(document).ready(function() {
    $("h1").css("color", "red");
})
//we are instructing it to wait until the document is loaded and ready. 