var player1answer = `<div class="player1-container">
                        <div class="player1 ekis1"></div>
                        <div class="player1 ekis2"></div>
                    </div>`;
var player2answer = `<div class="player2-container">
                        <div class="player2 circle1"></div>
                    </div>`;
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
];
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
          counter++;
          player2.push(index);
          console.log(`player2 : ${player2}`);
          CheckingWhoIsTheWinner(player2);
        } else {
          addingAnswer.innerHTML = player2answer;
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
      console.log(answerKey1d);
      //PLAYER1 ANSWER ARRAY
      player.forEach((player1Answer1d) => {
        console.log("player1 answer 1d  ::" + player1Answer1d);
        if (player1Answer1d == answerKey1d) {
          count++;
        }
      });
    });
    /////////////////WINNER//////////
    if (count == 3) {
      if (counter % 2) {
        document.write(`player1 : WINNER`);
      } else {
        document.write(`player2 : WINNER`);
      }
    }
    count = 0;
  });
};

const winnerFunction = () => {
  //   console.log("asdas");
};
addingAnswerFunction();

// there are 3d arr of answers
// you need to check the player answer everytime it clicks
// if the player answer has the combination of the answers display win
