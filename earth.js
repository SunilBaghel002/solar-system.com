const arrowContentPanel = document.querySelector('.arrow-content-panel');

arrowContentPanel.addEventListener('click', () => {
  if (arrowContentPanel.style.left === '-480px') {
    arrowContentPanel.style.left = '0';
  } else {
    arrowContentPanel.style.left = '-480px';
  }
});
const animatedText = document.querySelector('.animated-text');

function startAnimation() {
  animatedText.style.animationPlayState = 'running';
}

function pauseAnimation() {
  animatedText.style.animationPlayState = 'paused';
}

