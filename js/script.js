var typed2 = new Typed("#typed ", {
  strings: [
    "Hi Welcome to the Krystal Landing Page",
    "Member login for discount ",
  ],
  typeSpeed: 70,
  backSpeed: 70,
  loop: true,
});

const btnsch = document.querySelector(".search-btn");
const sch = document.querySelector(".search");
const inn = document.querySelector(".inn");

btnsch.addEventListener("mouseover", () => {
  sch.classList.add("active");
});

inn.addEventListener("mouseout", () => {
  sch.classList.remove("active");
});
