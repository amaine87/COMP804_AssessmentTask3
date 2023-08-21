let textbox = document.getElementById("task-4-text");
let desc = document.getElementById("task-4-desc");


let dog_img = document.getElementById("dog-img");
let cat_img = document.getElementById("cat-img");
let frog_img = document.getElementById("frog-img");

function btn_cat(){
    textbox.value = "User clicks Cat";
    desc.innerText = "Cat is clicked.";

    dog_img.style.display = "none";
    frog_img.style.display = "none";
    cat_img.style.display = "block";
}

function btn_dog(){
    textbox.value = "User clicks Dog";
    desc.innerText = "Dog is clicked.";

    dog_img.style.display = "block";
    frog_img.style.display = "none";
    cat_img.style.display = "none";
}

function btn_frog(){
    textbox.value = "User clicks Frog";
    desc.innerText = "Frog is clicked.";

    dog_img.style.display = "none";
    frog_img.style.display = "block";
    cat_img.style.display = "none";
}