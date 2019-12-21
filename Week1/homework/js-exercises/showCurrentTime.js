// 2. Create a JavaScript file called`showCurrentTime.js` and include it in the HTML file
// 3. Inside the JS file, write a function that adds the current time to the webpage.
// 4. Have the function execute when it's loading in the browser

const hourPlace = document.querySelector("#hour");
const minPlace = document.querySelector("#min");
const secondPlace = document.querySelector("#second");
const dayPlace = document.querySelector(".day");
const weekDay = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
const yearSpace = document.querySelector(".year");
function time() {
  const now = new Date();
  const hour = now.getHours();
  hourPlace.innerText = hour < 10 ? "0" + hour : hour;
  const min = now.getMinutes();
  minPlace.innerText = min < 10 ? "0" + min : min;
  const second = now.getSeconds();
  secondPlace.innerText = second < 10 ? "0" + second : second;
  const day = now.getDay();
  dayPlace.innerText = weekDay[day];
  const year = now.getFullYear();
  yearSpace.innerText = year;
}
setInterval(time, 1000);