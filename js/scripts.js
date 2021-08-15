const doublefist = document.getElementById("doublefist");
const startbutton = document.getElementById("clicktostart");
const heading = document.getElementById("heading");
const iconcontainer = document.querySelector(".row");
const paper = document.getElementById("paper");
const rock = document.getElementById("rock");
const scissor = document.getElementById("scissor");
const winsound = document.getElementById("win");
const losesound = document.getElementById("lose");
const stalematesound = document.getElementById("stalemate");
const choice = document.getElementById("choiceheader");
const opponenticons = document.querySelector(".opponenticons");
const opponentpaper = document.getElementById("opponentpaper");
const opponentscissor = document.getElementById("opponentscissor");
const opponentrock = document.getElementById("opponentrock");
const paperwin = document.getElementById("paperwin");
const scissorwin = document.getElementById("scissorwin");
const rockwin = document.getElementById("rockwin");
const rockloose = document.getElementById("rockloose");
const scissorloose = document.getElementById("scissorloose");
const paperloose = document.getElementById("paperloose");
const rockstalemate = document.getElementById("rockstalemate");
const paperstalemate = document.getElementById("paperstalemate");
const scissorstalemate = document.getElementById("scissorstalemate");
const playagain = document.getElementById("playagain");
const score = document.querySelector('.scorecontainer');
const playerscoredisplay = document.getElementById('playerscore');
const opponentscoredisplay = document.getElementById('opponentscore');
const howto = document.getElementById('howto');
const modal = document.getElementById('myModal');
const modalclose = document.querySelector('.close')

doublefist.addEventListener("mouseover", enableHoverFeature);
doublefist.addEventListener("mouseout", disableHoverFeature);
doublefist.addEventListener("click", startGame);

const opponentchoices = ["rock", "paper", "scissor"];

let playerscore = 0;
let opponentscore = 0;
let type = "";

function startGame() {
  /*intitialized when the user clicks to play.  Removes the event listeners,
intitalizes the animation and stops the intro music*/
  startbutton.style.display = "none";
  doublefist.classList.remove("hover");
  doublefist.removeEventListener("mouseover", enableHoverFeature);
  doublefist.removeEventListener("mouseout", disableHoverFeature);
  playAnimation();
}

function playAnimation() {
  //begins the animation that initializes the game
  //doublefist.classList.add("animated");
  //doublefist.addEventListener("animationend", playerChoice);
  doublefist.removeEventListener("click", startGame);
  removeFistImg()
  playerChoice()
}

function playerChoice() {
  //displays the rock, papper and scissor icons for player to choose from
  removeFistImg()
  heading.style.display = "none";
  iconcontainer.style.display = "flex";
  choice.style.display = "block";
  howto.style.display = "block";  
  howto.addEventListener('click', howTo)  
  paper.addEventListener("click", () => Battle("paper"));
  scissor.addEventListener("click", () => Battle("scissor"));
  rock.addEventListener("click", () => Battle("rock"));
}

function howTo() {
    modal.style.display="block"; 
    modalclose.onclick = function() {
        modal.style.display = "none";
      }
    window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
    } 
}

function Battle(choice) {
  //logic that determines the winner
  iconcontainer.style.display = "none";
  howto.style.display = 'none';
  let opponentchooses =
    opponentchoices[Math.floor(Math.random() * opponentchoices.length)];

  if (opponentchooses === "rock" && choice === "scissor") {
    playerLoss("scissor");
    type = "scissorloose";
  }
  if (opponentchooses === "scissor" && choice === "paper") {
    playerLoss("paper");
    type = "paperloose";
  }
  if (opponentchooses === "paper" && choice === "rock") {
    playerLoss("rock");
    type = "rockloose";
  }

  if (opponentchooses === "scissor" && choice === "rock") {
    playerWin("rock");
    type = "rockwin";
  }
  if (opponentchooses === "paper" && choice === "scissor") {
    playerWin("scissor");
    type = "scissorwin";
  }
  if (opponentchooses === "rock" && choice === "paper") {
    playerWin("paper");
    type = "paperwin";
  }

  if (opponentchooses === "scissor" && choice === "scissor") {
    stalemate("scissor");
    type = "scissorstalemate";
  }
  if (opponentchooses === "rock" && choice === "rock") {
    stalemate("rock");
    type = "rockstalemate";
  }
  if (opponentchooses === "paper" && choice === "paper") {
    stalemate("paper");
    type = "paperstalemate";
  }
  playAgain();
}

function playAgain() {
  //displays the play again button
  playagain.style.display = "block";
  playagain.addEventListener("click", resetGame);
  displayScore()
}

function displayScore() {
    document.querySelector('.scorecontainer').style.display = "flex";
    playerscoredisplay.innerHTML = playerscore;
    opponentscoredisplay.innerHTML = opponentscore;  
}

function resetGame() {
  //resets the game after playAgain button is clicked
  document.getElementById(`${type}`).style.display = "none";
  playagain.style.display = "none";
  score.style.display="none";
  iconcontainer.style.display = "flex";
  howto.style.display = "block";
}

//the following functions determine the message shown depending on a win, loss, or stalemate.
function playerLoss(reasonloss) {
  losesound.play();
  if (reasonloss === "scissor") {
    scissorloose.style.display = "block";
  }
  if (reasonloss === "paper") {
    paperloose.style.display = "block";
  }
  if (reasonloss === "rock") {
    rockloose.style.display = "block";
  }
  scoreKeeper('loss')
  
}

function scoreKeeper(winorlose) {
    if (winorlose === 'loss') {
        opponentscore++
        if (playerscore > 0) {
            playerscore--
        }
    }
    if (winorlose === 'win') {
        playerscore++
        if (opponentscore > 0) {
            opponentscore--
        }
    }
}

function stalemate(reasonstale) {
  stalematesound.play();
  if (reasonstale === "scissor") {
    scissorstalemate.style.display = "block";
  }
  if (reasonstale === "paper") {
    paperstalemate.style.display = "block";
  }
  if (reasonstale === "rock") {
    rockstalemate.style.display = "block";
  }
}

function playerWin(reasonwin) {
  winsound.play();
  if (reasonwin === "scissor") {
    scissorwin.style.display = "block";
  }
  if (reasonwin === "paper") {
    paperwin.style.display = "block";
  }
  if (reasonwin === "rock") {
    rockwin.style.display = "block";
  }
  scoreKeeper('win')
}

function removeFistImg() {
  doublefist.style.display = "none";
}

//hover feature functions
function enableHoverFeature() {
  doublefist.classList.add("hover");
  startbutton.style.display = "block";
}

function disableHoverFeature() {
  doublefist.classList.remove("hover");
  startbutton.style.display = "none";
}
