'use strict';

// Immediately Invoked Function Expression (IIFE)
// function declaration, function expression

let a = 10;
const x = (function() {
  a = 12;
  return function() {
    alert(a);
  };
})(); // (output is undefined) it is immediately invoke function and the result is return value.. So const x = function(){alert(a)};

x(); // (output is 12) It's means, alert(a);
// When JS start to use a variable, it search the values of var inside to outside. It moves outwards.
// alert(a), what is the value of a ? it is 12. Also inside the function a was written without let/const/var. So it means it will effect the values of a inside the global scope.
