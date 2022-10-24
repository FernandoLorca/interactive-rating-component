"use strict";

const mainComponent = document.getElementById("mainComponent");
const thanksComponent = document.getElementById("thanksYou");
const button = document.getElementById("button");
const rates = document.querySelectorAll(
  ".compoment__rates--numberBox-numbers > button"
);

const checkActive = (e, activeRate = rates) => {
  activeRate.forEach(mov => {
    mov.classList.remove("active");
  });

  if (e.classList.contains("active")) {
    return e.classList.remove("active");
  }
};

rates.forEach((mov, i, arr) => {
  mov.addEventListener("click", () => {
    checkActive(mov);
    mov.classList.add("active");
  });
});
