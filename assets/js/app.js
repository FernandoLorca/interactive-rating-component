"use strict";

const mainComponent = document.getElementById("mainComponent");
const thanksComponent = document.getElementById("thanksYou");
const button = document.getElementById("button");
const rates = document.querySelectorAll(
  ".compoment__rates--numberBox-numbers > button"
);

//RATES FUNCTIONALITY
//check that no rate have the active class on
const checkActive = (e, activeRate = rates) => {
  activeRate.forEach((mov) => {
    mov.classList.remove("active");
  });

  if (e.classList.contains("active")) {
    return e.classList.remove("active");
  }
};

//first run the checkActive function and then activate class active on selected rate.
let rateValue = "";

rates.forEach((mov) => {
  mov.addEventListener("click", () => {
    checkActive(mov);
    mov.classList.add("active");

    if (mov.classList.contains("active")) {
      rateValue = mov.textContent;
    }
  });
});

//submit button
// button.addEventListener("click", () => {
//   thanksComponent.classList.remove("hidden");
//   mainComponent.classList.add("hidden");
// });
