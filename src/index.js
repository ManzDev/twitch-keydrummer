import { soundBank, MODES } from "./modules/soundBank.js";

// Constants
const TIME_PER_LETTER = 240;

// DOM elements
const container = document.querySelector(".container");
const soundBox = document.querySelector(".soundbox");
const logo = document.querySelector(".logo");
const textLogo = document.querySelector(".text-logo");
const volume = document.querySelector(".volume input");

// Control vars
let currentFolder = 0;
let timer;

const getSoundBoxText = () => Array.from(soundBox.value.toLowerCase());
const getSoundBoxSize = () => soundBox.value.length;

const addEffect = (element, classname) => {
  element.classList.add(classname);
  setTimeout(() => element.classList.remove(classname), TIME_PER_LETTER * 1.5);
};

const playNote = (letter) => {
  const folder = MODES[currentFolder].toLowerCase();

  if (soundBank.has(letter)) {
    const sound = new Audio(folder + soundBank.get(letter).file);
    sound.volume = volume.value;
    sound.play();

    letter === "o" && addEffect(logo, "beat");
    letter === "f" && addEffect(logo, "jump");
    letter === "k" && addEffect(logo, "right");
    letter === "i" && addEffect(logo, "left");
    letter === "w" && addEffect(logo, "rave");
    letter === "n" && addEffect(logo, "spin");
    letter === "l" && addEffect(logo, "antispin");
    letter === "r" && addEffect(logo, "random");
  }
};

const play = () => {
  clearTimeout(timer);

  const text = getSoundBoxText();
  playText(text);

  timer = setTimeout(() => play(), TIME_PER_LETTER * text.length);
};

const playText = (text) => {
  const letters = Array.from(text);

  letters.forEach((letter, index) => {
    setTimeout(() => playNote(letter), TIME_PER_LETTER * (index + 1));
  });
};

logo.addEventListener("click", () => {
  currentFolder = (currentFolder + 1) % MODES.length;
  const name = MODES[currentFolder];
  MODES.forEach(mode => container.classList.remove(mode.toLowerCase()));
  container.classList.add(name.toLowerCase());
  textLogo.textContent = name;
});

play();

const qs = new URL(location).searchParams;
if (qs.has("text")) {
  soundBox.value = qs.get("text");
}
