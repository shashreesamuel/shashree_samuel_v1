let button = document.querySelector('.hamburger-menu');
let menu = document.querySelector('.navbar__navlinks')

button.addEventListener("click", () => {
    menu.classList.add("hover-underline-animation")
    menu.classList.toggle('open-nav');
})