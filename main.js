// Rock Paper Scissors Function
function rps (player, computer) {
  // write code here
  if (player === computer){
    return "Tie"
  }
  if (player == 'rock' && computer == 'scissors'){
    return "Player Wins"
  } else if (player == 'rock'){
    return 'Computer Wins'
  }
  if (player == 'paper' && computer == 'rock'){
    return "Player Wins"
  } else if (player == 'paper'){
    return 'Computer Wins'
  }
  if (player == 'scissors' && computer == 'paper'){
    return "Player Wins"
  } else if (player == 'scissors'){
    return 'Computer Wins'
  }
}


// Don't edit below these lines
console.log(rps('rock', 'paper'));
console.log(rps('scissors', 'paper'));
console.log(rps('scissors', 'rock'));
console.log(rps('rock', 'rock'));
