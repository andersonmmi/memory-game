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
shuffledDeck = shuffle(cardsDeck);
//console.log(shuffledDeck);
let cardIds = []

// Append Divs operation below //
gameBoard = document.querySelector('.game_board');
console.log(gameBoard);
//for on cardsDeck array here//
for (i=0; i<cardsDeck.length; i++){
  card = document.createElement('div');
  console.log(card);
  card.setAttribute('class','card ' + i);
  card.innerHTML = `<p>${cardsDeck[i]}<p>`;
  gameBoard.appendChild(card);
  card.setAttribute('onclick', "card.classList.toggle('flipped')");
  cardIds.push(i);
}

console.log(cardIds);
