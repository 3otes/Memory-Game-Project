//Nodelist that holds all the cards
let cards = document.querySelectorAll('li.card');

//array containing all cards
let allCards = [...cards];

//Variable to hold open cards.
let openCards = [];

//to count card matches.
let matchCounter = 0;

// counts all clicks.
let clickCounter = 0;

//count all moves
let moveCounter = 0;

//increments of time.
let seconds = 0;
let minutes = 0;

let secondsText = "";
let minutesText = "";

//gameTimer function
function gameTimer() {
  if (matchCounter != 8) {
    if (seconds <= 9) {
      secondsText = '0' + seconds;
    } else {
      secondsText = seconds;
    };
    if (minutes <= 9) {
      minutesText = '0' + minutes;
    } else {
      minutesText = minutes;
    };
    document.getElementById('timer').textContent = minutesText + ':' + secondsText;
    seconds += 1;
    if (seconds === 60) {
        minutes += 1;
        seconds = 0;
    };
    if (minutes === 60) {
        minutes = 0;
    };
    setTimeout(gameTimer, 1000);
  };
};

//shuffle allCards array.
shuffle(allCards);

//clear the deck.
document.getElementsByClassName('deck')[0].innerHTML = '';

//add shuffled cards to deck.
for (i of allCards) {
  document.getElementsByClassName('deck')[0].appendChild(i);
};

//when two cards are selected see if they match and count as one move.
const checkMatch = function(){
  moveCounter += 1;
  document.getElementsByClassName('moves')[0].textContent = moveCounter;
  if (moveCounter === 14){
    document.getElementsByClassName('stars')[0].children[0].remove();
  } else if (moveCounter === 18) {
    document.getElementsByClassName('stars')[0].children[0].remove();
  } else if (moveCounter === 22) {
    document.getElementsByClassName('stars')[0].children[0].remove();
  };
  //if matched...
  if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className){
    //add new class to card to show that they are a match.
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    //clear openCards counter to allow next move.
    openCards = [];
    //matchCounter to know that the game is over when all 8 matches are made, and display the pop up modal.
    matchCounter += 1;
    //the player won.
    if (matchCounter === 8){
      document.getElementById('woohoo').classList.remove('hidden');
      document.getElementById('woohoo').classList.add('you-win');
      document.getElementById('time').textContent = "Your Time: " + minutesText + ':' + secondsText;
      document.getElementById('moves').textContent = "Moves: " + moveCounter;
      let modalStars = "";
      for (i of document.querySelectorAll('i.fa-star')){
        modalStars += '<i class="fa fa-star"></i>';
      };
      document.getElementById('stars').innerHTML = modalStars;
      //document.getElementById('stars').textContent = "Your Rating: " + document.getElementsByClassName('stars')[0].children.length;
    }
  // the cards do not match
  } else {
    setTimeout(function delayFlip() {
      if (openCards.length === 2) {
        openCards[0].classList.remove('open', 'show');
        openCards[1].classList.remove('open', 'show');
        openCards = [];
      };
    }, 1000);
  };
};

// function to prevent more than two cards being flipped or the same card being
// clicked twice.
function addToFlip(elem){
  if (!elem.classList.contains('open') && openCards.length < 2) {
    openCards.push(elem);
    if (openCards.length === 1){
      elem.classList.add('open', 'show');
    } else if (openCards.length == 2) {
      elem.classList.add('open', 'show');
      checkMatch();
    };
  };
};

//function to flip the cards in the for of loop.
flipCard = function(e){
  if (clickCounter === 0) {
    gameTimer();
  };
  clickCounter += 1;
  if (e.target.classList.contains('fa')){
    addToFlip(e.target.parentElement);
  } else {
    addToFlip(e.target);
  };
};

//for of loop to flip the cards when clicked using the flipCard function
for (i of allCards) {
  i.addEventListener("click", flipCard);
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
