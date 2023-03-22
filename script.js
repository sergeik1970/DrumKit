const drumButtons = document.querySelectorAll(".drum")


//For of

for (let btn of drumButtons) {
    console.log(btn);

    btn.addEventListener("click", function () {
        makeSound(this.innerText)
    })
}


document.addEventListener("keydown", function (event) {
    console.log(event.key)

//Вызываем функцию
    makeSound(event.key)
});


function makeSound(key) {
    buttonAnimation(key);

    switch (key) {
        case 'w':
            new Audio('sounds/tom-1.mp3').play();
            break;

        case 'a':
            new Audio('sounds/tom-2.mp3').play();
            break;

        case 's':
            new Audio('sounds/tom-3.mp3').play();
            break;

        case 'd':
            new Audio('sounds/tom-4.mp3').play();
            break;

        case 'j':
            new Audio('sounds/snare.mp3').play();
            break;

        case 'k':
            new Audio('sounds/crash.mp3').play();
            break;

        case 'l':
            new Audio('sounds/kick-bass.mp3').play();
            break;
    }
}


function buttonAnimation(key) {
    try{
    document.querySelector("." + key).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("." + key).classList.remove("pressed");
    }, 100);
}
catch(error) {
    console.log("Нет такой кнопки")
}
}