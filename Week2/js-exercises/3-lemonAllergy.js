const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];
// Write a function
// Use the`filter` array function to take out the lemons
// Output a string that says: "My mom bought me a fruit basket, containing [array of fruits] !"

function filterLemon(array) {
  const exceptLemon = array.filter(fruit => !fruit.includes('Lemon'));
  return `My mom bought me a fruit basket, containing ${exceptLemon.join(', ')} !`;
}
console.log(filterLemon(fruitBasket));
