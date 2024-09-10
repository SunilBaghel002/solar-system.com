const audio1 = document.getElementById("audio1");
const audio2 = document.getElementById("audio2");
const hoverElement1 = document.getElementById("hoverElement1");
const hoverElement2 = document.getElementById("hoverElement2");

hoverElement1.addEventListener("mouseover", () => {
  audio1.play();
  audio2.pause(); // Pause the other audio if it's playing
});

hoverElement1.addEventListener("mouseout", () => {
  audio1.pause();
});

hoverElement2.addEventListener("mouseover", () => {
  audio2.play();
  audio1.pause(); // Pause the other audio if it's playing
});

hoverElement2.addEventListener("mouseout", () => {
  audio2.pause();
});
// If you want to control the animation manually
const animatedText = document.querySelector('.animated-text');

function startAnimation() {
  animatedText.style.animationPlayState = 'running';
}

function pauseAnimation() {
  animatedText.style.animationPlayState = 'paused';
}


