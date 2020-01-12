'use strict';

const x = 9;
function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x); // output is: 9;
// f1(x) function start to work, it used x value as a 9 and operate it with plus 1. And return val is equal to 10
// so when you console the function the result is 10.
// but x value doesn't change. According to pass by value, when primitive values like number,boolean,string used by function, the real value don't change

const y = { x: 9 };
function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y); // output is: {x:10};
// f2(y) function executes. y={x:9} is an object. So it is a complex value.footer
// according to pass by reference when function used the obj value, the global value's real values changes as a function.
