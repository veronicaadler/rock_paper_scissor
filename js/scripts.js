const opponentchoices = ["rock", "paper", "scissor"]
let type = ''

const doublefist = document.getElementById("doublefist")
const startbutton = document.getElementById("clicktostart")
const heading = document.getElementById("heading")
const iconcontainer = document.querySelector('.row')
const paper = document.getElementById('paper')
const rock = document.getElementById('rock')
const scissor = document.getElementById('scissor')
const introsong = document.getElementById('intro')
const winsound = document.getElementById('win')
const losesound = document.getElementById('lose')
const stalematesound = document.getElementById('stalemate')
const choice = document.getElementById('choiceheader')
const opponenticons = document.querySelector('.opponenticons')
const opponentpaper = document.getElementById('opponentpaper')
const opponentscissor = document.getElementById('opponentscissor')
const opponentrock = document.getElementById('opponentrock')
const paperwin = document.getElementById('paperwin')
const scissorwin = document.getElementById('scissorwin')
const rockwin = document.getElementById('rockwin')
const rockloose = document.getElementById('rockloose')
const scissorloose = document.getElementById('scissorloose')
const paperloose = document.getElementById('paperloose')
const rockstalemate = document.getElementById('rockstalemate')
const paperstalemate = document.getElementById('paperstalemate')
const scissorstalemate = document.getElementById('scissorstalemate')
const playagain = document.getElementById('playagain')

doublefist.addEventListener('mouseover', enableHoverFeature)
doublefist.addEventListener('mouseout', disableHoverFeature)
doublefist.addEventListener('click', startGame)


function startGame() { /*intitialized when the user clicks to play.  Removes the event listeners,
intitalizes the animation and stops the intro music*/
introsong.play()
heading.style.display="none";
startbutton.style.display="none";
doublefist.classList.remove('hover')
doublefist.removeEventListener('mouseover', enableHoverFeature);
doublefist.removeEventListener('mouseout', disableHoverFeature);
fistAnimation()
}

function fistAnimation() {
doublefist.classList.add('animated');
doublefist.addEventListener('animationend', playerChoice)
doublefist.removeEventListener('click', startGame)

}

function playerChoice() {
iconcontainer.style.display="flex";
choice.style.display="block";
paper.addEventListener('click', () => Battle("paper"))
scissor.addEventListener('click', () => Battle("scissor"))
rock.addEventListener('click', () => Battle("rock"))
}



function Battle(choice) {
    iconcontainer.style.display="none"
    let opponentchooses = opponentchoices[Math.floor(Math.random() * opponentchoices.length)];
    console.log(opponentchooses)
    removeFistImg()

    if (opponentchooses === "rock" && choice === "scissor") {
      
        playerLoss("scissor")
        type = 'scissorloose'
    }
    if (opponentchooses === "scissor" && choice === "paper") {
  
        playerLoss("paper")
        type = "paperloose"
    }
    if (opponentchooses === "paper" && choice === "rock") {
  
        playerLoss("rock")
        type = 'rockloose'
    }

    if (opponentchooses === "scissor" && choice === "rock") {
        playerWin("rock")
        type = 'rockwin'
        
    }
    if (opponentchooses === "paper" && choice === "scissor") {
        playerWin("scissor")
        type = 'scissorwin'
      
    }
    if (opponentchooses === "rock" && choice === "paper") {
        playerWin("paper")
        type = 'paperwin'
    }

    if (opponentchooses === "scissor" && choice === "scissor") {
        stalemate('scissor')
        type = 'scissorstalemate'
    }
    if (opponentchooses === "rock" && choice === "rock") {
        stalemate('rock')
        type = 'rockstalemate'
    }
    if (opponentchooses === "paper" && choice === "paper") {
        stalemate('paper')
        type = 'paperstalemate'
    }
    playAgain()
}

function playAgain() {
    playagain.style.display="block"
    playagain.addEventListener('click', resetGame)
}

function resetGame() {
document.getElementById(`${type}`).style.display="none"
playagain.style.display="none"
iconcontainer.style.display="flex"
}

function removeFistImg() {
doublefist.style.display="none";
}

function playerLoss(reasonloss) {
losesound.play()
if (reasonloss === "scissor") {
    scissorloose.style.display="block"
}
if (reasonloss === "paper") {
    paperloose.style.display='block'
}
if (reasonloss === "rock") {
    rockloose.style.display='block'
}
}

function stalemate(reasonstale) {
stalematesound.play()
if (reasonstale === "scissor") {
    scissorstalemate.style.display="block"
}
if (reasonstale === "paper") {
    paperstalemate.style.display='block'
}
if (reasonstale === "rock") {
    rockstalemate.style.display='block'
}
}

function playerWin(reasonwin) {
winsound.play()
if (reasonwin === "scissor") {
    scissorwin.style.display="block"
}
if (reasonwin === "paper") {
    paperwin.style.display='block'
}
if (reasonwin === "rock") {
    rockwin.style.display='block'
}
}
function enableHoverFeature() {
doublefist.classList.add('hover');
startbutton.style.display="block";
}

function disableHoverFeature() {
doublefist.classList.remove('hover')
startbutton.style.display="none";
}