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
  card.setAttribute('class','card flipped');
  card.setAttribute('id', i)
  card.appendChild(document.createTextNode(cardsDeck[i]));
  gameBoard.appendChild(card);
  let cardNumber = document.getElementById(i);
  //console.log(cardNumber);
  cardIds.push(card);
}

//console.log(cardIds);

// declare targetCard variable in order to save the input from flipCard()
// but is it necesary?
let targetCard = '';
// declare matchCards array
let matchCards = [];

// TODO: build flip function here *** DONE ***//

function flipCard(e){
  if (e.target !== e.currentTarget) {
    let clickedCard = e.target.id;
    cardIds[e.target.id].classList.toggle('flipped');
    //console.log("click detected at " + e.target.id);
    targetCard = (e.target.innerHTML);
    matchCards.push(e.target);
      if (matchCards.length === 2){
        compareCards();
      }
  }
  e.stopPropagation();
}
gameBoard.addEventListener('click',flipCard,false);

// TODO: build logic to compare flipped cards //

function compareCards(){
  if(matchCards[0].innerHTML === matchCards[1].innerHTML){
    alert("match detected!");
  } else {
    //flip cards back
    matchCards[0,1].classList.toggle('flipped');
    //empty matchCards array
    matchCards.pop();
    matchCards.pop();
  }


}
