let countDown;
const upArrow = document.getElementById('up');
const downArrow = document.getElementById('down');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const timerDisplay = document.querySelector('.timeDisplay');
const endTimeDisplay = document.querySelector('.timeEnd');
const minDisplay = document.getElementById('min');
const secDisplay = document.getElementById('sec');
const hourDisplay = document.getElementById('hour');
const form = document.customForm;
const audioPlus = document.getElementById('+');
const audioMinus = document.getElementById('-');

function timer(seconds) {
  clearInterval(countDown);
  const now = Date.now();
  const then = now + seconds * 1000;

  countDown = setInterval(function() {
    if (seconds > 0) {
      seconds--;
      const hour = Math.floor(seconds / 60 / 60);
      const minutes = Math.floor((seconds / 60) % 60);
      const remainSeconds = seconds % 60;
      hourDisplay.textContent = `${hour < 10 ? '0' : ''}${hour}`;
      minDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
      secDisplay.textContent = `${remainSeconds < 10 ? '0' : ''} ${remainSeconds}`;
    } else {
      timerDisplay.textContent = `Time is Up`;
      clearInterval(countDown);
    }
  }, 1000);
  endTime(then);
}
function endTime(total) {
  const end = new Date(total);
  const hrs = end.getHours();
  const min = end.getMinutes();
  endTimeDisplay.textContent = `End Time ${hrs < 10 ? '0' : ''}${hrs}:${min < 10 ? '0' : ''}${min}`;
}

function updateSeconds() {
  const totalSeconds =
    parseFloat(hourDisplay.innerText) * 3600 +
    parseFloat(minDisplay.innerText) * 60 +
    parseFloat(secDisplay.innerText);
  return totalSeconds;
}
function plus25() {
  const plus25min = updateSeconds() + 25 * 60;
  audioPlus.play();
  timer(plus25min);
}
function minus25() {
  const remainMinutes = parseFloat(hourDisplay.innerText * 60) + parseFloat(minDisplay.innerText);
  audioMinus.play();
  if (remainMinutes >= 25) {
    const min25min = updateSeconds() - 25 * 60;
    timer(min25min);
  } else {
    alert("It's impossible! You have less than 25 minutes");
  }
}
function stopTimer() {
  clearInterval(countDown);
  const seconds = updateSeconds();
  const hour = Math.floor(seconds / 60 / 60);
  const minutes = Math.floor((seconds / 60) % 60);
  const remainSeconds = seconds % 60;
  hourDisplay.textContent = `${hour < 10 ? '0' : ''}${hour}`;
  minDisplay.textContent = `${minutes < 10 ? '0' : ''}${minutes}`;
  secDisplay.textContent = `${remainSeconds < 10 ? '0' : ''} ${remainSeconds}`;
}
function resumeTimer() {
  const seconds = updateSeconds();
  timer(seconds);
}

// ***************** addEventListener *****************

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const seconds = this.minutes.value * 60;
  timer(seconds);
});

upArrow.addEventListener('click', plus25);
downArrow.addEventListener('click', minus25);
stop.addEventListener('click', stopTimer);
play.addEventListener('click', resumeTimer);
