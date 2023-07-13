const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;

let timer;
let minutes = 25;
let seconds = 0;

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(timer);
          startButton.disabled = true;
          return;
        }
        minutes--;
        seconds = 59;
      } else {
        seconds--;
      }
      updateTimerDisplay();
    }, 1000);
  }
}

function resetTimer() {
  clearInterval(timer);
  minutes = 25;
  seconds = 0;
  timer = null;
  startButton.disabled = false;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  minutesDisplay.textContent = minutes.toString().padStart(2, '0');
  secondsDisplay.textContent = seconds.toString().padStart(2, '0');
}

function toggleMode() {
  body.classList.toggle('dark-mode');
  const buttons = document.querySelectorAll('button');
  buttons.forEach((button) => {
    button.classList.toggle('dark-mode');
  });

  const modeIcon = modeToggle.querySelector('i');
  if (body.classList.contains('dark-mode')) {
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');
  } else {
    modeIcon.classList.remove('fa-sun');
    modeIcon.classList.add('fa-moon');
  }
}

startButton.addEventListener('click', startTimer);
resetButton.addEventListener('click', resetTimer);
modeToggle.addEventListener('click', toggleMode);
