"use strict";

const imgContainer = document.querySelector(".img-container");
const images = document.querySelectorAll(".img-container img");

let index = 0;

function carousel() {
  index++;

  if (index > images.length - 1) {
    index = 0;
  }

  imgContainer.style.transform = `translateX(${-index * 500}px)`;
}

setInterval(carousel, 2000);
