"use strict";

const mainComponent = document.getElementById("mainComponent");
const thanksComponent = document.getElementById("thanksYou");
const button = document.getElementById("button");
const rates = document.querySelectorAll(
  ".compoment__rates--numberBox-numbers > button"
);
const rateChoosen = document.getElementById("rateChoosen");

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

//thankyou rate functionality
const changeChoosenRate = () => {
  rateChoosen.textContent = rateValue;
};

//submit button
button.addEventListener("click", () => {
  rates.forEach((mov) => {
    if (mov.classList.contains("active")) {
      thanksComponent.classList.remove("hidden");
      mainComponent.classList.add("hidden");
      changeChoosenRate();
    } else {
      button.textContent = "Choose a rate before submit";
      button.style.backgroundColor = "#7c8798";
      button.style.cursor = "no-drop";
      setTimeout(() => {
        button.textContent = "SUBMIT";
        button.style.backgroundColor = "#fb7413";
        button.style.cursor = "pointer";
      }, 2000);
    }
  });
});
