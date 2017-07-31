let cardName = document.getElementsByClassName('card');

console.log(cardName);

cardName[0].addEventListener('mouseover', flipCard);

function flipCard(){
cardName[0].classList.toggle("flipped");
}

console.log(cardName);
