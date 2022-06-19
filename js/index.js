//Button clicks
const btns = document.querySelectorAll("button")

btns.forEach(btn => {
    
    btn.addEventListener("click", function(event) {
        
        const file = sound_file(this.textContent);
        if(file != "") {
            new Audio("sounds/" + file).play();
        }
        
    });

    btn.addEventListener("mousedown", function(event) {
        add_button_animate(this.textContent);
    })

    btn.addEventListener("mouseup", function(event) {
        remove_button_animate(this.textContent);
    })

    
});

//Keypress
document.addEventListener("keypress", function(event) {

    const file = sound_file(event.key);

    if(file != "") {
        new Audio("sounds/" + file).play();
    }

});

document.addEventListener("keyup", function(event) {
    
    const file = sound_file(event.key);
    
    if(file != "") {
        remove_button_animate(event.key);
    }
})

document.addEventListener("keydown", function(event) {
    
    const file = sound_file(event.key);
    
    if(file != "") {
        add_button_animate(event.key);
    }
})

function sound_file(value_) {

    var sound_file = "";

    switch(value_) {
        case "w":
            sound_file = "tom-1.mp3"
            break;
        case "a":
            sound_file = "tom-2.mp3"
            break;
        case "s":
            sound_file = "tom-3.mp3"
            break;
        case "d":
            sound_file = "tom-4.mp3"
            break;
        case "j":
            sound_file = "snare.mp3"
            break;
        case "k":
            sound_file = "kick-bass.mp3"
            break;
        case "l":
            sound_file = "crash.mp3"
            break;
        default:
            sound_file = ""
    }

    return sound_file;
}

function add_button_animate(key) {

    if(!document.querySelector("." + key).classList.contains("pressed")) {
        document.querySelector("." + key).classList.add("pressed");
    }
    
}

function remove_button_animate(key) {

    if(document.querySelector("." + key).classList.contains("pressed")) {
        document.querySelector("." + key).classList.remove("pressed");
    }
    
}




