console.log('HI');

const options = ("Rock", "Paper", "Scissors");

function getComputerchoice(){
    const choice = options[Math.floor(Math.random() * options.length)];
return choice;
}

function checkWinner(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return "Tie"
    }
    else if(
        (playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Scissors" && computerSelection == "Paper") ||
        (playerSelection == "Paper" && computerSelection == "Rock")
    ){
    return "player";
    }
    else{
        return "computer";
    }
}

function  playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie"
    }
    else if (result == "player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You Lose! ${computerSelection} beats ${playerSelection}`
    }
}

function getplayerchoice(){
    let validatedinput = false;
    while(validatedinput == false){
        constchoice = prompt("Rock Paper Scissors");
        if(choice == null){
            continue;
        }
        const choiceinlower = choice.tolowerCase();
        if(options.includes(choiceinlower)){
            validatedinput = true;
            return choiceinlower;
        }
    }
}

function game(){
    let scoreplayer = 0;
    let scorecomputer = 0;
    console.log("Hello")
    for (let i = 0; i < 5; i++) {
        const playerSelection = getplayerchoice();
        const computerSelection = getComputerchoice();
        console.log(playRound(playerSelection, computerSelection));
        if(checkWinner(playerSelection, computerselection) == "player"){
        scoreplayer++;
    }
    else if(checkWinner(playerSelection, computerSelection) == "player"){
        scorecomputer++;
    }    
}
console.log("Game Over")
if(scoreplayer > scorecomputer){
    console.log("player was the winner");
 }
 else if(scoreplayer < scorecomputer){
    console.log("computer was the winner");
 } 
 else{
    console.log("we have a tie")
 }
}

game()