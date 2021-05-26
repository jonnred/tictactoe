var player1answer = `<div class="player1-container">
                        <div class="player1 ekis1"></div>
                        <div class="player1 ekis2"></div>
                    </div>`;
var player2answer = `<div class="player2-container">
                        <div class="player2 circle1"></div>
                    </div>`;
const endgame = () => {
  const restart = document.querySelector("#restart");
  restart.addEventListener("click", () => {
    player1 = [];
    player2 = [];
    counter = 0;
    for (let i = 0; i < 9; i++) {
      if (
        box[i].contains(document.querySelector(".player1-container")) ||
        box[i].contains(document.querySelector(".player2-container"))
      ) {
        box[i].removeChild(box[i].childNodes[0]);
      }
    }
    document.querySelector(".game-menu").remove();
  });
};
const endGameBoard = (player, status) => {
  let board = `<div class="game-menu">
  <h1 class="game-result">${status}${player}</h1>
  <div class="game-choices-container">
    <button id="restart" class="game-restart">RESTART</button>
  </div>
</div>`;
  document.querySelector("#endgame").innerHTML = board;
  endgame();
};
// answers of player1 and player2
var player1 = [];
var player2 = [];
var answerKey = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const playerTurn = document.querySelector("#player-turn");
// counter: to know who's turn
var counter = 0;
const box = document.querySelectorAll(".box");
const addingAnswerFunction = () => {
  for (let index = 0; index < box.length; index++) {
    const element = box[index];
    element.addEventListener("click", (e) => {
      let addingAnswer = e.target;
      if (e.target != element) {
        alert("Space Is Occupied");
      } else {
        if (counter % 2) {
          addingAnswer.innerHTML = player1answer;
          playerTurn.innerText = "PLAYER 1";
          counter++;
          player2.push(index);
          console.log(`player2 : ${player2}`);
          CheckingWhoIsTheWinner(player2);
        } else if (counter == 8) {
          addingAnswer.innerHTML = player1answer;

          endGameBoard("", "draw");
          // document.write("draw");
        } else {
          addingAnswer.innerHTML = player2answer;
          playerTurn.innerText = "PLAYER 2";
          counter++;
          player1.push(index);
          console.log(`player1 : ${player1}`);
          CheckingWhoIsTheWinner(player1);
        }
      }
    });
  }
};
const CheckingWhoIsTheWinner = (player) => {
  ////////ANSWER KEY 2D ARRAY
  answerKey.forEach((answerKey2d) => {
    let count = 0;
    //////ANSWERKEY 1D ARRAY
    answerKey2d.forEach((answerKey1d) => {
      // console.log(answerKey1d);
      //PLAYER1 ANSWER ARRAY
      player.forEach((player1Answer1d) => {
        if (player1Answer1d == answerKey1d) {
          count++;
        }
      });
    });
    /////////////////WINNER //////////
    //count variable: number of correct answers
    // if it is equal to 3 it means all answers are correct
    if (count == 3) {
      if (counter % 2) {
        endGameBoard("PLAYER 1", "WINNER: ");
      } else {
        endGameBoard("PLAYER 2", "WINNER: ");
      }
    }
    //count equals to 0
    //it is to restart the count after looping to 1d array
    count = 0;
  });
};

addingAnswerFunction();

// there are 3d arr of answers
// you need to check the player answer everytime it clicks
// if the player answer has the combination of the answers display win
