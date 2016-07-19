var computer = {
    name: 'computer',
    score: 0,
    pick: ''
};
var player = {
    name: '',
    score: 0,
    pick: ''
};
var round = 0
var gameResult = "";
var buttons = document.getElementsByClassName("pick-button");
var computerScore = document.getElementById("computerScore");
var playerScore = document.getElementById("playerScore");

function newGame() { 
  //Reset
  computer.score = 0;
  computer.pick = "";
  player.score = 0;
  player.pick = "";
  round = 0;
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].style.visibility = 'visible';
  };
 };

 player.name = prompt("Jak się nazywasz?", "Podaj imię :)");
 document.getElementById("playerName").innerHTML = player.name;

 function playerPick(pick) {
  player.pick = pick; 
  computerPick(); //choose computer's pick
  checkResult(); //check result
}


function computerPick() {
  //losowy numer od 0 do  2
  switch (Math.floor(Math.random()*3)) {
    case 0:
    computer.pick = "rock";
    break;
    case 1:
    computer.pick = "paper";
    break;
    case 2:
    computer.pick = "scissors";
    break;
    };
  };

function checkResult() {
  //sprawdzamy
    if (player.pick === computer.pick) {
    gameResult = "Remis!"
      }
      else if (player.pick === "rock") { //grazc wybiera kamien
        if (computer.pick === "scissors") { player.score++; gameResult = "Wygrałeś !" } 
        else if (computer.pick === "paper") { computer.score++; gameResult = "Wygrał komputer!" }
       }
       else if (player.pick === "paper") { //gracz wybiera papier
        if  (computer.pick === "rock") { player.score++; gameResult = "Wygrałeś !" }
        else if (computer.pick === "scissors") { computer.score++; gameResult = "Wygrał komputer!" }
       }
      else if (player.pick === "scissors") { //gracz wybiera nozyczki
        if  (computer.pick === "paper") { player.score++; gameResult = "Wygrałeś !" }
          else if (computer.pick === "rock") { computer.score++; gameResult = "Wygrał komputer!" }
      } 
  document.getElementById("computerPick").innerHTML = computer.pick
  document.getElementById("playerPick").innerHTML = player.pick
  document.getElementById("gameResult").innerHTML = gameResult
  computerScore.innerHTML = computer.score;
  playerScore.innerHTML = player.score;
  };

