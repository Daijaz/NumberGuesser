let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    return Math.floor(Math.random()*10);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    let closestHuman = Math.abs(secretTarget - humanGuess);
    let closestComputer = Math.abs(secretTarget - computerGuess);
    if (closestHuman < closestComputer){
        return true;
    } else if (closestComputer < closestHuman){
        return false;
    } else {
        return true;
    }
};

const updateScore = winner => {

    switch(winner){
        case 'human':
            humanScore+=1;
            break;
        case 'computer':
            computerScore+=1;
            break;    
    }

};

function advanceRound (){
    currentRoundNumber += 1;
}

