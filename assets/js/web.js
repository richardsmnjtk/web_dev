// *==== Menu Navigation
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");

menuBtn.addEventListener("click", () => {
  toggle();
});

function toggle() {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
}


const aLink = document.querySelectorAll(".a-link");
aLink.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    toggle();
  });
});


window.addEventListener("scroll", function () {
  var navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});


