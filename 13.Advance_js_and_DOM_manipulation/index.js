function playAudio(letter){
    var audio;
    switch(letter){
        case 'w' :  audio = new Audio("./sounds/tom-1.mp3");
                    break;
        case 'a' :  audio = new Audio("./sounds/tom-2.mp3");
                    break;
        case 's' :  audio = new Audio("./sounds/tom-3.mp3");
                    break;
        case 'd' :  audio = new Audio("./sounds/tom-4.mp3");
                    break;
        case 'j' :  audio = new Audio("./sounds/crash.mp3");
                    break;
        case 'k' :  audio = new Audio("./sounds/kick-bass.mp3");
                    break;
        case 'l' :  audio = new Audio("./sounds/snare.mp3");
                    break;
        default :   console.log("invalid");
    }
    audio.play();
}
function handleClick(){
    this.style.color = "white";
    var char = this.innerHTML;
    playAudio(char);    
    this.style.color = "red";
}
var buttons = document.querySelectorAll(".drum");
for(var i = 0; i<buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
}