const image = document.querySelector('.image');
const paragraph = document.querySelector('.content-panel2');

image.addEventListener('mouseover', () => {
  paragraph.classList.remove('hidden');
});

image.addEventListener('mouseout', () => {
  paragraph.classList.add('hidden');
});
