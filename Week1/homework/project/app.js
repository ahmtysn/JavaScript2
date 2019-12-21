const list = [
  {
    quote: 'Let us sacrifice our today so that our children can have a better tomorrow.',
    author: 'A. P. J. Abdul Kalam',
  },
  {
    quote: 'There is nothing permanent except change.',
    author: 'Heraclitus',
  },
  {
    quote:
      'Wise men speak because they have something to say; Fools because they have to say something.',
    author: 'Plato',
  },
  {
    quote: 'You cannot shake hands with a clenched fist.',
    author: 'Indira Gandhi',
  },
  {
    quote: 'The supreme art of war is to subdue the enemy without fighting.',
    author: 'Sun Tzu',
  },
  {
    quote:
      "There is only one corner of the universe you can be certain of improving, and that's your own self.",
    author: 'Aldous Huxley',
  },
  {
    quote: 'The journey of a thousand miles begins with one step.',
    author: 'Lao Tzu',
  },
  {
    quote: 'Whoever is happy will make others happy too.',
    author: 'Anne Frank',
  },
  {
    quote: 'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    author: 'Benjamin Franklin',
  },
  {
    quote:
      'Very little is needed to make a happy life; it is all within yourself, in your way of thinking.',
    author: 'Marcus Aurelius',
  },
];

let mainDiv = document.createElement('div');
let btnDiv = document.createElement('div');
let spaceDiv = document.createElement('div');
mainDiv.className = 'main';
btnDiv.className = 'main';
mainDiv.id = 'div1';
btnDiv.id = 'div2';
spaceDiv.setAttribute('id', 'div3');
let h1 = document.createElement('h1');
let h3 = document.createElement('h3');
let btn = document.createElement('button');
h1.innerText = '"The best quotes are coming.. :)';
h3.innerText = 'ahmtysn';
btn.innerText = 'New Quote';
mainDiv.appendChild(h1);
mainDiv.appendChild(h3);
btnDiv.appendChild(btn);
document.body.appendChild(mainDiv);
document.body.appendChild(btnDiv);
document.body.appendChild(spaceDiv);
btn.addEventListener('click', randomly);

function randomly() {
  let random = Math.floor(Math.random() * list.length);
  h1.innerText = '" ' + list[random].quote;
  h3.innerText = list[random].author;
}
