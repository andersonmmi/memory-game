let cardsTypes = ['a','b','c','d','e','f','g','i'];
console.log(cardsTypes);
let cardsDeck = cardsTypes.concat.apply(cardsTypes,cardsTypes);
console.log(cardsDeck);
let score = 0;
let cardsMatched = 0;
let scoreBoard = document.querySelector('.score_board');
let timer = document.querySelector('.timer');
let seconds = 0;

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

// TODO: create timer
// let time = setTimeout(plusOneSecond,1000);

function plusOneSecond(){
  if(cardsMatched !== cardsDeck.length)
    seconds++;
    timer.innerHTML = seconds;
    setTimeout(plusOneSecond,1000);
}

plusOneSecond();
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
      setTimeout(compareCards,500);
    }
  }
  e.stopPropagation();
}
gameBoard.addEventListener('click',flipCard,false);

// TODO: build logic to compare flipped cards *** DONE *** //

function compareCards(){
  //call setTimeout function here??? nope, put it before the compareCards call in the flipCard event
  if(matchCards[0].innerHTML === matchCards[1].innerHTML){
    //alert("match detected!");
    score += 200;
    //TODO: change score display here *** DONE ***

    cardsMatched +=2;
    matchCards.pop();
    matchCards.pop();
    // console.log(cardsMatched + " === " + cardsDeck.length);
    // console.log("Your score is " + score);
    scoreBoard.innerHTML = 'Score: ' + score;

    if (cardsMatched === cardsDeck.length){
      alert ("Congratulations, you cleared the board!");
    }
  } else {
    //flip cards back

    matchCards[0].classList.toggle('flipped');
    matchCards[1].classList.toggle('flipped');
    console.log(matchCards);
    //empty matchCards array
    matchCards.pop();
    matchCards.pop();
    console.log(matchCards);
  }


}
