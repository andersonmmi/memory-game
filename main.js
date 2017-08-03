let cardsTypes = ['a','b','c','d','e','f','g','i'];
console.log(cardsTypes);
let cardsDeck = cardsTypes.concat.apply(cardsTypes,cardsTypes);
console.log(cardsDeck);

// Here I shall teach main.js to shuffle cards //
function shuffle(thisArray){
  for (i=0; i<100; i++){
    popped = thisArray.pop();
    randomPosition= Math.floor(Math.random()*cardsDeck.length);
    thisArray.splice(randomPosition,0,popped);
  };
}
// Woohoo it works!!!! //
// Shuffle function has been created //
shuffle(cardsDeck);
//console.log(shuffledDeck);
let cardIds = []

// Append Divs operation below //
gameBoard = document.querySelector('.game_board');
//for on shuffledDeck array here//
for (i=0; i<cardsDeck.length; i++){
  let card = document.createElement('div');
  card.setAttribute('class','card');
  card.setAttribute('id', i)
  card.appendChild(document.createTextNode(cardsDeck[i]));
  gameBoard.appendChild(card);
//  card.setAttribute('onclick', "card.classList.toggle('flipped')");
  let cardNumber = document.getElementById(i);
// TODO: here is where the trouble begins.  Flip single cards.
  card.addEventListener('mouseover', alert("mouseover detected at " + i));
  console.log(cardNumber);
  cardIds.push(card);
}

console.log(cardIds);
