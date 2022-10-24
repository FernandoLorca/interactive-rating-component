"use strict";

const mainComponent = document.getElementById("mainComponent");
const thanksComponent = document.getElementById("thanksYou");
const button = document.getElementById("button");
const rates = document.querySelectorAll(
  ".compoment__rates--numberBox-numbers > button"
);

//rates funtionality
//check that no rate have the active class on
const checkActive = (e, activeRate = rates) => {
  activeRate.forEach(mov => {
    mov.classList.remove("active");
  });

  if (e.classList.contains("active")) {
    return e.classList.remove("active");
  }
};

//first run the checkActive function adn then activate class active on selected rate.
rates.forEach(mov => {
  mov.addEventListener("click", () => {
    checkActive(mov);
    mov.classList.add("active");
  });
});

//submit button
button.addEventListener("click", () => {
  thanksComponent.classList.remove("hidden");
  mainComponent.classList.add("hidden");
});
