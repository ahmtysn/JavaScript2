const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

// Write a program that outputs each of these inside an HTML file
// Create an HTML and JavaScript file, link them together
// Use the`map` and / or`forEach` function to put each hobby into a list item
// Output the list items in an unordered list

const main = document.getElementById('main');
const title = document.createElement('h1');
title.textContent = 'My Hobbies';
const hobbyList = document.createElement('ul');

main.appendChild(title);
main.appendChild(hobbyList);

myHobbies.forEach(hobby => {
  const line = document.createElement('li');
  line.textContent = hobby;
  hobbyList.appendChild(line);
});
