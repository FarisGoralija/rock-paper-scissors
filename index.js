function getComputerChoice(){
    let num = Math.floor(Math.random() * 3)
    if(num==0){
        return "rock";
    }
    else if(num==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}

const playerSelection = prompt("Enter your choice")

function playSingleRound(playesSelection, computerChoice){
    computerChoice = getComputerChoice();
    if(playesSelection.toLowerCase() == "rock" && computerChoice == "rock"){
        return "Both got rock, it's a tie";
    }
    else if(playesSelection.toLowerCase() == "rock" && computerChoice == "scissors"){
        return `Player got rock, computer got ${computerChoice}, Player wins`;
    }
    else if(playesSelection.toLowerCase() == "rock" && computerChoice == "paper"){
        return `Player got rock, computer got ${computerChoice}, Computer wins!`;
    }
    else if(playesSelection.toLowerCase() == "scissors" && computerChoice == "rock"){
        return `Player got scissors, computer got ${computerChoice}, Computer wins!`;
    }
    else if(playesSelection.toLowerCase() == "scissors" && computerChoice == "scissors"){
        return "Both got scissors, it's a tie!";
    }
    else if(playesSelection.toLowerCase() == "scissors" && computerChoice == "paper"){
        return `Player got scissors, computer got ${computerChoice}, Player wins!`;
    }
    else if(playesSelection.toLowerCase() == "paper" && computerChoice == "rock"){
        return `Player got paper, computer got ${computerChoice}, Player wins!`;
    }
    else if(playesSelection.toLowerCase() == "paper" && computerChoice == "scissors"){
        return `Player got paper, computer got ${computerChoice}, Computer wins!`;
    }
    else if(playesSelection.toLowerCase() == "paper" && computerChoice == "paper"){
        return "Both got paper, it's a tie!";
    }
}

function playGame(playesSelection, computerChoice){
    for(let i = 0; i < 5; i++){
        console.log(playSingleRound(playesSelection, computerChoice));
    }
}