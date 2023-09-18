$("h1").css("color", "red");
//this means select h1 on our webpage and we are changing its css, namely color to change its color

//if we have given jquery script link in the head.. 
//then we will have to write our code as follows
$(document).ready(function() {
    $("h1").css("color", "red");
})
//we are instructing it to wait until the document is loaded and ready. 

//write jquery, s.t. whenever we press a key that keyletter gets printed in our h1 

$(document).keydown(function(event) {
    console.log(event.key);
    $("h1").text(event.key);
});
