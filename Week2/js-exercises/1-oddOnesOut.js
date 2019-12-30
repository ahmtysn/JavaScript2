// function doubleEvenNumbers(numbers) {
//   const newNumbers = [];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       newNumbers.push(numbers[i] * 2);
//     }
//   }
//   return newNumbers;
// }

// Using the map and filter functions, rewrite the doubleEvenNumbers function.

function doubleEvenNumbers(numbers) {
  return numbers.filter(number => !(number % 2)).map(number => number * 2);
}
const myNumbers = [1, 2, 3, 4];
console.log(doubleEvenNumbers(myNumbers));
