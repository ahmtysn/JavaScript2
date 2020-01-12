'use strict';

function createBase(x) {
  return function(y) {
    return x + y;
  };
}

const addFive = createBase(5);
const addSix = createBase(6);
const addTen = createBase(10);

console.log(addSix(9)); // output is 15
console.log(addFive(19)); // output is 24
console.log(addTen(26)); // output is 36
