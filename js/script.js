let menu = document.querySelector('.navbar__navlinks');
let button = document.querySelector('.menu');
let closebtn = document.querySelector('.close-btn');

button.addEventListener("click", () => {
    menu.classList.add("open-nav");
})


closebtn.addEventListener("click", () => {
    menu.classList.remove("open-nav");
})
