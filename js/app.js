//Nodelist that holds all the cards
let cards = document.querySelectorAll('li.card');
//array containing all cards
let allCards = [...cards];
//Variable to hold open cards.
let openCards = [];

shuffle(allCards);
document.getElementsByClassName('deck')[0].innerHTML = '';
for (i of allCards) {
  document.getElementById('deck').appendChild(i);
};


const checkMatch = function(){
  if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className){
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    openCards = [];
    console.log('matches');
    // 1. change class to match
  } else {
    setTimeout(function delayFlip() {
      openCards[0].classList.remove('open', 'show');
      openCards[1].classList.remove('open', 'show');
      openCards = [];
    }, 1000);

  };

};

let noMatch = function(e) {
  if (document.querySelectorAll('li.card.open.show')){

    console.log("foo");
  };
};

//function to flip the cards in the for of loop.
flipCard = function(e){
  openCards.push(e.target);

  if (openCards.length === 1){
    e.target.classList.add('open', 'show');
  } else if (openCards.length == 2) {
    e.target.classList.add('open', 'show');
    checkMatch();

    // 1.check if cards matched. ad matched calss
    // 2. if cards not match hide.
    // 3. open cards empty.
    // 4. if cards mat
    // 5. if cards matched stay.

  } else {
    noMatch();
  };
};

//for of loop to flip the cards when clicked using the flipCard function
for (i of allCards) {
  i.addEventListener("click", flipCard,);
};




// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 *///list that holds all the cards
