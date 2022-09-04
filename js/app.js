/*-------------------------------- Constants --------------------------------*/
const squareEls = {
  'sq0': document.getElementById('sq0'),
  'sq1': document.getElementById('sq1'),
  'sq2': document.getElementById('sq2'),
  'sq3': document.getElementById('sq3'),
  'sq4': document.getElementById('sq4'),
  'sq5': document.getElementById('sq5'),
  'sq6': document.getElementById('sq6'),
  'sq7': document.getElementById('sq7'),
  'sq8': document.getElementById('sq8')
};
const messageEl = document.getElementById('message');

console.dir(squareEls);
console.dir(messageEl);
/*---------------------------- Variables (state) ----------------------------*/
//let secretNum, guessList, isWinner
let board, turn, winner;


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
  board = new [null, null, null, null, null, null, null, null, null];

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