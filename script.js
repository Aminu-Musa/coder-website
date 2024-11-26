const openNavBar = document.querySelector(".open-btn");
const closeNavBar = document.querySelector(".close-btn");
const navMenu = document.querySelector(".nav-bar");
const navMenuItems = document.querySelectorAll(".nav-bar li");

const stickyNav = document.querySelector("nav")

window.addEventListener("scroll", () => {
  if (scrollY > 500) {
    stickyNav.classList.add("sticky-nav")
  } else {
    stickyNav.classList.remove("sticky-nav")
  }
})

navMenuItems.forEach((navItem) => {
  navItem.addEventListener("click", () => {
    navMenu.classList.remove("open-nav-bar");
  });
});

openNavBar.addEventListener("click", () => {
  navMenu.classList.add("open-nav-bar");
});
closeNavBar.addEventListener("click", () => {
  navMenu.classList.remove("open-nav-bar");
});
