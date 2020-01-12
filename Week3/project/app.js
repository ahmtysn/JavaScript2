let form = document.getElementById('form');
let price = document.getElementById('price');
let options = document.getElementById('options');
let people = document.getElementById('people');
let infoPrice = document.getElementById('infoPrice'); // about results
let infoEach = document.getElementById('infoEach');

form.addEventListener('submit', calculate);

function calculate(e) {
  e.preventDefault();

  let priceValue = price.value;
  let optionsValue = options.value;
  let peopleValue = people.value;
  let totalBill = (priceValue * optionsValue) / 100;
  let billForOnePerson = totalBill / peopleValue;
  billForOnePerson = Math.floor(billForOnePerson * 100) / 100;
  infoPrice.textContent = billForOnePerson;
  if (!Number.parseInt(priceValue)) return alert('Write your meal price as a number');
  if (peopleValue > 1) infoEach.textContent = `each`;
  if (peopleValue < 1) alert('Write positive value for people count');
}
