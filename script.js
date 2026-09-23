let current = 0;
const screens = [...document.querySelectorAll('.screen')];
const toast = document.getElementById('toast');

function go(n) {
  screens[current].classList.remove('active');
  current = n;
  screens[current].classList.add('active');
  window.scrollTo({top:0, behavior:'instant'});
}

function wrong(message) {
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
}

const runaway = document.getElementById('runaway');
if (runaway) {
  runaway.addEventListener('mouseenter', () => {
    const x = (Math.random() * 180) - 90;
    const y = (Math.random() * 100) - 50;
    runaway.style.transform = `translate(${x}px, ${y}px)`;
  });
  runaway.addEventListener('touchstart', (e) => {
    e.preventDefault();
    const x = (Math.random() * 140) - 70;
    const y = (Math.random() * 80) - 40;
    runaway.style.transform = `translate(${x}px, ${y}px)`;
  });
}
