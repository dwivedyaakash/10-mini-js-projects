"use strict";

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSound();
    document.getElementById(sound).play();
  });

  document.body.appendChild(btn);
});

function stopSound() {
  sounds.forEach((sound) => {
    const soundPause = document.getElementById(sound);

    soundPause.pause();
    soundPause.currentTime = 0;
  });
}
