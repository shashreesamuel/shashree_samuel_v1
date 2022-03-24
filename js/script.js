const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".navbar__navlinks");
  const navLinks = document.querySelectorAll(".navlinks__navitem");
  // Toggle nav
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    // Animate links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 1
        }s`;
      }
    });
    // Burger Animation
    burger.classList.toggle("toggle");
  });
};

navSlide();
