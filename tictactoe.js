var player1answer = `<div class="player1-container">
<div class="player1 ekis1"></div>
<div class="player1 ekis2"></div>
</div>`;
var player2answer = `        <div class="player2-container">
<div class="player2 circle1"></div>
</div>`
var player1 = [];
var player2 = [];
var answerKey = [0,1,2];
var counter = 0;
const box = document.querySelectorAll('.box');
const addingAnswerFunction = () => {
    for (let index = 0; index < box.length; index++) {
        const element = box[index];
        element.addEventListener('click', (e) => {
            let addingAnswer = e.target;
            if (e.target != element) {
                alert('Space Is Occupied');
            } else 
            {
                if (counter % 2) {
                    addingAnswer.innerHTML = player1answer;
                    counter++;
                    player1.push(index);
                    CheckingWhoIsTheWinner();
                    
                } 
                else {
                    addingAnswer.innerHTML = player2answer;
                    player2.push(index);
                    counter++;
                }
            }

        })

    }
}
const CheckingWhoIsTheWinner = () => {
    if(player1 === answerKey){
        alert('winner');
        console.log(player1);

    } else {
        console.log('asd')
        console.log(player1);

    }

}
const winnerFunction = () => {
    console.log('asdas')
}
addingAnswerFunction();