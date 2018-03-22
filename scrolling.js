const slider = document.querySelector('.game-wrapper');
const last = slider.querySelector('.game:last-child');
let isDown = false;
let startX;
let scrollLeft;
let endScroll;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;  // stop the fn from running
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;

});

function checkScroll() {
  endScroll = (last.offsetLeft - slider.offsetWidth) + (last.offsetWidth); //padding and border
  if (slider.scrollLeft === endScroll) {
    slider.scrollLeft = 5;
  } else if (slider.scrollLeft === 0) {
    slider.scrollLeft = endScroll - 50;
  }
}

slider.addEventListener('scroll', checkScroll)