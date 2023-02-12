const menuBtn = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close-icon");
const mobileNavExpanded = document.querySelector(".menu-items-mobile");
const a = document.querySelectorAll("nav a");

// mobile navbar display
menuBtn.addEventListener("click", () => {
  mobileNavExpanded.classList.remove("translate");
});
closeMenuBtn.addEventListener("click", () => {
  mobileNavExpanded.classList.add("translate");
});

// adding an active state for nav items
a.forEach((link) => {
  if (link.href === window.location.href) {
    link.setAttribute("aria-current", "page");
  }
});
