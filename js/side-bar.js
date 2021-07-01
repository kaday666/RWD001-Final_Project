const bars = document.querySelector(".fa-bars");
const cross = document.querySelector(".fa-times");
const hdnav = document.querySelector(".hide-nav");
const toggle = document.querySelector("#toggler");

bars.addEventListener("click", () => {
  hdnav.classList.add("active");
  toggle.classList.add("active");
});
cross.addEventListener("click", () => {
  hdnav.classList.remove("active");
  toggle.classList.remove("active");
});
