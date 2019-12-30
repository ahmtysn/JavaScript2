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

myHobbies.forEach(hobby => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  li.textContent = hobby;
  ul.appendChild(li);
});
