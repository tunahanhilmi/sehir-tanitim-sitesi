


//slider ayarları
let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = "none";
  }
}

// Init slider
function startSlide() {
  reset();
  sliderImages[0].style.display = "block";
}

// Show prev
function slideLeft() {
  reset();
  sliderImages[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  sliderImages[current + 1].style.display = "block";
  current++;
}

// Left arrow click
arrowLeft.addEventListener("click", function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  slideLeft();
});

// Right arrow click
arrowRight.addEventListener("click", function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

const video11 = "https://www.youtube.com/embed/5N_ARkC00aA";
const video22 = "https://www.youtube.com/embed/L8F0DMNhZXM";
const video33 = "https://www.youtube.com/embed/FxW4XfqtupM";

function video1(){
  const video = document.getElementById("video");
  video.src= video11;
}
function video2(){
  const video = document.getElementById("video");
  video.src= video22;
}
function video3(){
  const video = document.getElementById("video");
  video.src= video33;
}

