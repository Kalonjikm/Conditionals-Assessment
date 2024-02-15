let computerChoice;
let userChoice;
let randomNumber;

userChoice = prompt("Heads or Tails?");
console.log(userChoice);

randomNumber = Math.random();
    if(randomNumber < 0.5) {
        randomNumber = 0;
    }else {
        randomNumber = 1;
    }
console.log(randomNumber);

    if(randomNumber == 0) {
        computerChoice = "heads";
    }else if(randomNumber == 1) {
        computerChoice = "tails";
    }
console.log(computerChoice)

if(userChoice == computerChoice) {
    alert("You guessed right! The coin flip landed on " + userChoice);
}else if(userChoice != computerChoice) {
    alert("Sorry, the coin flip landed on " + computerChoice);
}

let birthYear;

birthYear = prompt("What year were you born?");
if((2024 - birthYear) > 21) {
    alert("You are old enough to drink in the US");
} else if((2024 - birthYear) == 21) {
    alert("You are old enough to drink in the US... barely");
} else if ((2024 - birthYear) < 21) {
    alert("Sorry, you are not old enough to drink in the US");
}