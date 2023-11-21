var playerChoice;
do {
  playerChoice = prompt("Do you choose ROCK, PAPER or SCISSORS?");
}
while (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors");
var computerChoice = Math.random();

// b. Computer makes a choice
if (computerChoice <= 0.33) {
  computerChoice = "rock";
} else if (computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
}
var choice1 = playerChoice;
var choice2 = computerChoice;

// c. A compare function will determine who wins
function compare (choice1, choice2){
  if (choice1 === choice2){
    alert("It's a tie!");
  }
else if (choice1 === "rock"){
  if (choice2 === "paper"){
    alert("Computer chose PAPER, you LOSE!");
  } else
      alert("Computer chose SCISSORS, you WIN!");
  }
else if (choice1 === "paper"){
  if (choice2 === "scissors"){
    alert("Computer chose SCISSORS, you LOSE!");
  } else
      alert("Computer chose ROCK, you WIN!");
  }
else if (choice1 === "scissors"){
  if (choice2 === "rock"){
    alert ("Computer chose ROCK, you lose!");
  } else
      alert("Computer chose PAPER, you WIN!");
  }
}
compare (playerChoice, computerChoice);
console.log("You chose:", choice1, "||", "Computer chose:", choice2);