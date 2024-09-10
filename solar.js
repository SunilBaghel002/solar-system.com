const timeSlider = document.getElementById('timeSlider');
const timeSpeedLabel = document.getElementById('timeSpeed');

// Array of planet classes
const planetClasses = ['.circle1', '.circle2', '.circle3', '.circle4', '.circle5', '.circle6', '.circle7', '.circle8'];

timeSlider.addEventListener('input', () => {
  const timeSpeed = timeSlider.value;
  timeSpeedLabel.textContent = timeSpeed;

  // Update animation durations for all planets
  planetClasses.forEach(planetClass => {
    const planetElement = document.querySelector(`.${planetClass}`);
    const originalDuration = planetElement.style.animationDuration.replace('ms', '');
    const newDuration = originalDuration / timeSpeed;
    planetElement.style.animationDuration = `${newDuration}ms`;
  });
});/*
const timeSlider = document.getElementById('timeSlider');
const timeSpeedLabel = document.getElementById('timeSpeed');

timeSlider.addEventListener('input', () => {
  const timeSpeed = timeSlider.value;
  timeSpeedLabel.textContent = timeSpeed;

  // Example for Mercury
  const mercuryOrbitDuration = 10000 / timeSpeed; // Adjust based on original duration
  document.querySelector('.circle3').style.animationDuration = `${mercuryOrbitDuration}ms`;

  // Update other planets' animation durations similarly
});
