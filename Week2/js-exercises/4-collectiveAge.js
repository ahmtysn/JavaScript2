const hackYourFutureMembers = [
  { name: 'Wouter', age: 33 },
  { name: 'Federico', age: 32 },
  { name: 'Noer', age: 27 },
  { name: 'Tjebbe', age: 22 },
];

// Write a program that calculates the combined age of every member
// Make use of the `map` function to get the ages
// It should contain a function that takes a callback
// The callback adds all the ages together and returns the number
// The main function should log the string "The collective age of the HYF team is: [number]" to the console, and afterwards return the number

function combinedAge(members) {
  const agesList = members.map(member => member.age);
  const totalAges = agesList.reduce((total, age) => total + age, 0);
  const average = totalAges / members.length;
  console.log(`The collective age of the HYF team is: ${totalAges}`);
  console.log(`The average age of the HYF team is: ${average}.`);
  return totalAges;
}
console.log(combinedAge(hackYourFutureMembers));
