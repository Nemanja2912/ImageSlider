// Public variable
// Speed is in second 1 === 1s
// Change speed must be higher than transition speed
const transitionSpeed = 1;
const changeSpeed = 5;

// Image overlay
const imageSlider = document.querySelector("#image-slider");

// Image item
let nodeImageList = document.querySelectorAll(".image");

// Copy first item
const firstItemClone = nodeImageList[0].cloneNode(true);
nodeImageList = [...nodeImageList, firstItemClone];

for (let i = 0; i < nodeImageList.length; i++) {
  imageSlider.appendChild(nodeImageList[i]);
}

// Counter
let counter = 0;

// General settings

imageSlider.style.overflow = "hidden";

for (let i = 0; i < nodeImageList.length; i++) {
  nodeImageList[i].style.height = "100%";
  nodeImageList[i].style.width = "100%";
}

// Transition EventListener

for (let i = 0; i < nodeImageList.length; i++) {
  nodeImageList[i].addEventListener("transitionend", function () {
    if (counter === nodeImageList.length) {
      for (let i = 0; i < nodeImageList.length; i++) {
        nodeImageList[i].style.transition = `0s`;

        nodeImageList[i].style.transform = `translateY(0%)`;
      }

      counter = 0;

      setTimeout(() => {
        changeBackground();
      }, 0);
    }
  });
}

// Slider action

function changeBackground() {
  for (let i = 0; i < nodeImageList.length; i++) {
    nodeImageList[i].style.transition = `${transitionSpeed}s`;

    nodeImageList[i].style.transform = `translateY(${-100 * counter}%)`;
  }

  counter++;

  if (counter === nodeImageList.length) return;

  setTimeout(() => {
    changeBackground();
  }, changeSpeed * 1000);
}

changeBackground();
