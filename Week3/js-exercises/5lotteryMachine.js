'use strict';

// Write a function that takes 4 arguments.
// A start value
// An end value
// A callback that executes if the number is divisible by 3
// A callback that executes if the number is divisible by 5
// The function should first generate an array containing values from start value to end value(inclusive).
// Then the function should take the newly created array and iterate over it, and calling the first callback if the array value is divisible by 3.
// The function should call the second callback if the array value is divisible by 5.
// Both functions should be called if the array value is divisible by both 3 and 5.

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];
  // make array
  // start at beginning of array and check if you should call threeCallback or fiveCallback or go on to next
  for (let i = startIndex; i <= stopIndex; ++i) {
    numbers.push(i);
  }
  console.log('Numbers List:', numbers);
  fiveCallback(numbers);
  threeCallback(numbers);
}

function sayThree(array) {
  let divThree = array.filter(ele => !(ele % 3) && ele !== 0);
  console.log(`Your number(s):"${divThree.join(', ')}" is/are divisible by 3.`);
}
function sayFive(array) {
  let divFive = array.filter(ele => !(ele % 5) && ele !== 0);
  console.log(`Your number(s):"${divFive.join(', ')}" is/are divisible by 5.`);
}

threeFive(10, 15, sayThree, sayFive);
// outputs are;
// Numbers List: [10, 11, 12, 13, 14, 15]
// Your number(s): "10, 15" is/are divisible by 5.
// Your number(s): "12, 15" is/are divisible by 3.
