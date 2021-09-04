"use strict";

const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

btn.addEventListener("click", () => {
  createNotification();
});

function createNotification() {
  const notification = document.createElement("div");
  notification.classList.add("toast");

  notification.innerHTML = "Hello there!";

  container.appendChild(notification);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}
