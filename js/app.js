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
const winningCombos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
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
  board = [null, null, null, null, null, null, null, null, null];
  turn = 1;
  winner = null;
  render();
  getMessage();
  Object.values(squareEls).forEach((s) => s.addEventListener('click', handleClick));
}

function render(){
  board.forEach((s, i) => {
    let currElement = squareEls[i];

    if(currElement)
    {
      if(s === 1){
        currElement.style.backgroundColor = 'yellow';
        currElement.innerText = 'X';
      }
      if(s === -1){
        currElement.style.backgroundColor = 'red';
        currElement.innerText = 'O';
      }
      if(s === null){
        currElement.style.backgroundColor = 'white';
        currElement.innerText = '';
      }
    }
  });
}

function getMessage(){
  let newMessage = winner === null ? 
  `It is now player ${turn === 1 ? 'X' : 'O'} turn` : winner === '1' ?
  'Player X has won' : winner === '-1' ? 'Player O has won' : 'There is a tie';

  messageEl.innerText = newMessage;
}

function getNextTurn(){ 
  turn = turn * -1;
  return turn;
}

function handleClick(evt){
  const sqIdx = evt.target.id.replace('sq', '');
  
  if(board[sqIdx] !== null){
    return;
  }

  board[sqIdx] = turn;
  render();

  winner = getWinner();
  
  if(winner !== null){
    getMessage();
    return;
  }

  getNextTurn();
  getMessage();

  console.log(`Event was clicked ${sqIdx}`);
  console.log(`choice at ${sqIdx} is ${board[sqIdx]}`)
}

function getWinner(){
  let player1 = 0;
  let player2 = 0;
  let hasNulls = false;

  for (const combo of winningCombos){
    combo.forEach((i) => {
        if(board[i] !== null){
          if(board[i] === 1)
          {
            player1++;
          }
          else{
            player2++;
          }
        }
        else{
          hasNulls = true;
        }
      })

      if(player1 === 3 || player2 ===3) break;
      
      player1 = 0;
      player2 = 0;
  };

  return player1 === 3 ? '1' : player2 === 3 ? '-1' : hasNulls ? null : 'T';
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