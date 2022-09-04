/*-------------------------------- Constants --------------------------------*/
const squareEls = {
    0: document.getElementById('sq0'),
    1: document.getElementById('sq1'),
    2: document.getElementById('sq2'),
    3: document.getElementById('sq3'),
    4: document.getElementById('sq4'),
    5: document.getElementById('sq5'),
    6: document.getElementById('sq6'),
    7: document.getElementById('sq7'),
    8: document.getElementById('sq8')
};
const messageEl = document.getElementById('message');

console.dir(squareEls);
console.dir(messageEl);
/*---------------------------- Variables (state) ----------------------------*/
//let secretNum, guessList, isWinner
let board = [], turn, winner;


/*------------------------ Cached Element References ------------------------*/
// const form = document.querySelector("form")
// const guessInput = document.querySelector("#guess-input")
// const guessesEl = document.querySelector("#prev-guesses")
// const messageEl = document.querySelector("#message")
// const resetBtn = document.querySelector("#reset-button")
// const prevGuessMsg = document.querySelector("#prev-guesses-msg")


/*----------------------------- Event Listeners -----------------------------*/

//form.addEventListener('reset', init)

/*-------------------------------- Functions --------------------------------*/
//init() // need an initialize function
function init(){
  board = [1, null, -1, -1, 1, null, 1, -1, null];
  turn = 1;
  winner = null;
  render();
}

function render(){
  board.forEach((s, i) => {
    let currElement = squareEls[i];

    if(currElement)
    {
      if(s === 1){
        currElement.style.color = 'yellow';
        currElement.innerText = 'X';
      }
      if(s === -1){
        currElement.style.color = 'red';
        currElement.innerText = 'O';
      }
      if(s === null){
        // do nothing currElement.style.color = 'green';
      }
    }
  });
}

// function checkGuess(guess){
//   guessInput.value = ''
//   if (isNaN(guess) || guess < 1 || guess > 100) {
//     // we have an error!
//     renderError('Whoops!  Please enter a number from 1 to 100!')
//     // return something to short-circuit the function
//     return
//   } else if (guess === secretNum) {
//     // we have a winner!
//     // set isWinner to true
//     isWinner = true
//   }
//   guessList.push(guess)
//   render()
// }

init();