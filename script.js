const hamMenu = document.querySelector(".hamburger");
const offScreenMenu = document.querySelector(".off__screen__menu");
// const navLink = document.querySelectorAll("#nav__link");
const hamburgerClose = document.querySelector(".close");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  console.log("hello");
});

hamburgerClose.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
});

// Close the menu when a menu item is clicked
document.querySelectorAll(".off__screen__menu ul li a").forEach((link) => {
  link.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
  });
});
