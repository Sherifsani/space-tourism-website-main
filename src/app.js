const menuBtn = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close-icon");
const mobileNavExpanded = document.querySelector(".menu-items-mobile");
const a = document.querySelectorAll("nav a");
const navItemsDest = document.querySelectorAll(".destination-nav ul li");
const destHead = document.querySelector(".dest-heading");
const destDesc = document.querySelector(".dest-desc p");
const destImg = document.querySelector(".dest-img img");
const destDistance = document.querySelector(".distance p");
const destTime = document.querySelector(".time p");
const crewImage = document.querySelector(".crew-img img");
const crewRole = document.querySelector(".crew-role");
const crewName = document.querySelector(".crew-name");
const crewBio = document.querySelector(".crew-bio p");
const controls = document.querySelectorAll(".controls span");

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
// active destination nav
navItemsDest.forEach((item) => {
  item.addEventListener("click", function () {
    item.classList.add("active");
    navItemsDest.forEach((a) => {
      if (a !== item) a.classList.remove("active");
    });
  });
});
controls.forEach((control) => {
  control.addEventListener("click", () => {
    control.classList.add("clicked");
    controls.forEach((a) => {
      if (a !== control) a.classList.remove("clicked");
    });
  });
});
// fetching data from data.json
async function fetchData() {
  let response = await fetch("../src/data.json");
  let data = await response.json();
  const destinationData = data.destinations;
  const crew = data.crew;

  navItemsDest.forEach((item, index) => {
    item.addEventListener("click", () => {
      destDesc.textContent = destinationData[index].description;
      destHead.innerText = destinationData[index].name;
      destImg.src = destinationData[index].images.png;
      destDistance.textContent = destinationData[index].distance;
      destTime.textContent = destinationData[index].travel;
    });
  });
  controls.forEach((control, index) => {
    control.addEventListener("click", function () {
      crewImage.src = crew[index].images.png;
      crewName.textContent = crew[index].name;
      crewRole.textContent = crew[index].role;
      crewBio.textContent = crew[index].bio;
    });
  });
}
fetchData();
