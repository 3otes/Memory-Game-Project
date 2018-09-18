//Nodelist that holds all the cards
let cards = document.querySelectorAll('li.card');

//array containing all cards
let allCards = [...cards];

//Variable to hold open cards.
let openCards = [];

//to count card matches.
let counter = 0;

//count all moves
let moveCounter = 0;

//increments of time.
let seconds = 0

let minutes = 0

let hours = 0


//gameTimer function
function gameTimer() {
  document.getElementById('timer').textContent = hours + ':' minutes + '.' + seconds;
  seconds += 1;
  if (seconds == 60) {
      minutes++;
      seconds = 0;
  };
  if (minutes == 60) {
      hour++;
      minutes = 0;
  };
  setTimeout(gameTimer, 1000);
};

//game time
gameTimer();

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
  if (moveCounter === 13){
    document.getElementsByClassName('stars')[0].children[0].remove();
  } else if (moveCounter === 16) {
    document.getElementsByClassName('stars')[0].children[0].remove();
  } else if (moveCounter === 20) {
    document.getElementsByClassName('stars')[0].children[0].remove();
  };
  //if matched...
  if (openCards[0].firstElementChild.className === openCards[1].firstElementChild.className){
    //add new class to card to show that they are a match.
    openCards[0].classList.add('match');
    openCards[1].classList.add('match');
    //clear openCards counter to allow next move.
    openCards = [];
    //counter to know that the game is over when all 8 matches are made, and display the pop up modal.
    counter += 1;
    if (counter === 8){
      document.getElementById('woohoo').classList.remove('hidden');
      document.getElementById('woohoo').classList.add('you-win');
      document.getElementById('time').textContent = seconds;
      document.getElementById('stars').textContent = document.getElementsByClassName('stars')[0].children.length;
    }
  // the cards do not match
  } else {
    setTimeout(function delayFlip() {
      openCards[0].classList.remove('open', 'show');
      openCards[1].classList.remove('open', 'show');
      openCards = [];
    }, 1000);
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
  };
};

//for of loop to flip the cards when clicked using the flipCard function
for (i of allCards) {
  i.addEventListener("click", flipCard,);
};

/*for (i of score) {
  i.Nodelist
    console.log('foo');
  };
};
*/
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
