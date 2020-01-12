'use strict';

// first way..

// function removeDuplicates(array) {
//   let outputArray = [];
//   for (const elm of array) {
//     if (!outputArray.includes(elm)) outputArray.push(elm);
//   }
//   return outputArray;
// }

// second way..

function removeDuplicates(array) {
  return array.reduce((acc, cur) => {
    if (acc.includes(cur)) return acc;
    // check
    else return [...acc, cur]; // add new element to the array
  }, []);
}

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
const numbers = [1, 5, 2, 9, 6, 5, 3, 8, 0, 6, 3, 9, 7, 1, 2, 8, 2, 8, 4, 7, 6, 4, 5, 3];
console.log(removeDuplicates(letters));
console.log(removeDuplicates(numbers).sort());
