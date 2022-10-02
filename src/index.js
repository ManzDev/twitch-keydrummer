import { soundBank, MODES } from "./modules/soundBank.js";

const TIME_PER_LETTER = 240;

let timer;
let currentFolder = 0;
const container = document.querySelector(".container");
const soundBox = document.querySelector(".soundbox");
const logo = document.querySelector(".logo");
const textLogo = document.querySelector(".text-logo");

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
    sound.play();
    letter === "o" && addEffect(logo, "beat");
  }
};

const play = () => {
  clearTimeout(timer);

  const letters = getSoundBoxText();
  const size = getSoundBoxSize();

  letters.forEach((letter, index) => {
    setTimeout(() => playNote(letter), TIME_PER_LETTER * (index + 1));
  });

  timer = setTimeout(() => play(), TIME_PER_LETTER * size);
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
