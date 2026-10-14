// select all buttons with class drum
const buttonW = document.querySelector(".w");
const buttonA = document.querySelector(".a");
const buttonS = document.querySelector(".s");
const buttonD = document.querySelector(".d");
const buttonJ = document.querySelector(".j");
const buttonK = document.querySelector(".k");
const buttonL = document.querySelector(".l");

buttonW.addEventListener("click", () => {
  playSound("w");
  animateButton("w");
});

buttonA.addEventListener("click", () => {
  playSound("a");
  animateButton("a");
});

buttonS.addEventListener("click", () => {
  playSound("s");
  animateButton("s");
});

buttonD.addEventListener("click", () => {
  playSound("d");
  animateButton("d");
});

buttonJ.addEventListener("click", () => {
  playSound("j");
  animateButton("j");
});

buttonK.addEventListener("click", () => {
  playSound("k");
  animateButton("k");
});

buttonL.addEventListener("click", () => {
  playSound("l");
  animateButton("l");
});

// Detecting keyboard press and playing sound
document.addEventListener("keydown", (event) => {
  if (event.key === "w") {
    playSound("w");
    animateButton("w");
  } else if (event.key === "a") {
    playSound("a");
    animateButton("a");
  } else if (event.key === "s") {
    playSound("s");
    animateButton("s");
  } else if (event.key === "d") {
    playSound("d");
    animateButton("d");
  } else if (event.key === "j") {
    playSound("j");
    animateButton("j");
  } else if (event.key === "k") {
    playSound("k");
    animateButton("k");
  } else if (event.key === "l") {
    playSound("l");
    animateButton("l");
  }
});

//  Function to play sound
function playSound(key) {
  if (key === "w") {
    const audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  } else if (key === "a") {
    const audio = new Audio("sounds/tom-2.mp3");
    audio.play();
  } else if (key === "s") {
    const audio = new Audio("sounds/tom-3.mp3");
    audio.play();
  } else if (key === "d") {
    const audio = new Audio("sounds/tom-4.mp3");
    audio.play();
  } else if (key === "j") {
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
  } else if (key === "k") {
    const audio = new Audio("sounds/crash.mp3");
    audio.play();
  } else if (key === "l") {
    const audio = new Audio("sounds/kick-bass.mp3");
    audio.play();
  }
}

// Function to animate button
function animateButton(key) {
  const activeButton = document.querySelector(`.${key}`);

  activeButton.classList.add("pressed");

  setTimeout(() => {
    activeButton.classList.remove("pressed");
  }, 175);
}
