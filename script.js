const count = document.querySelector('.count');
const btn = document.querySelector('.buttons');

btn.addEventListener('click', function (e) {
  if (e.target.classList.contains('subtract')) {
    count.innerHTML--;
    addcolor();
  }
  if (e.target.classList.contains('add')) {
    count.innerHTML++;
    addcolor();
  }
  if (e.target.classList.contains('restart')) {
    count.innerHTML = 0;
    addcolor();
  }
});

function addcolor() {
  if (count.innerHTML < 0) {
    count.style.color = 'red';
  } else if (count.innerHTML > 0) {
    count.style.color = 'yellow';
  } else {
    count.style.color = '#0b0f0dba';
  }
}
