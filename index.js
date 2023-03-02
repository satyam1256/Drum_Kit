// To select the buttons and playing sound while clicking on the mentioned keyword.

for(var i=0;i< document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click" , function(){
        var buttonInnerHTML = this.innerHTML;
        makesound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);

    });
}

// playing sound on pressing on the mentioned key from keyboard

document.addEventListener("keydown" , function(event){
    makesound(event.key);
    buttonAnimation(event.key);
});


// making the function to check which key is on action... 

function makesound(key){

    switch (key) {
        case "w":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            
            break;
        case "a":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            
            break;
        case "s":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            
            break;
        case "d":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            
            break;
        case "j":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            
            break;
        case "k":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
                
            break;
        case "l":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
                
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}

function buttonAnimation(currentkey){
    var active =  document.querySelector("."+currentkey);
    active.classList.add("pressed");
    setTimeout(function(){
        active.classList.remove("pressed");
    } , 100);
}


