function rockPaperScissors () {
    console.log("Getting started on Game");
    const userChoicePrompt = prompt ("Enter Rock, Paper, Scissors")
    const userChoice = userChoicePrompt.toLowerCase();

    let computerChoice;

    const randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber === 1) {
    computerChoice = "rock";
} else if (randomNumber === 2) {
    computerChoice = "paper";
} else {
    computerChoice = "scissors";
}

    console.log("user selected", userChoice);
    console.log("computer selected", computerChoice);

    if (
        (userChoice === "rock" && computerChoice === "scissors" ) ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log("The user wins !!!")
    } else if (
        (userChoice === computerChoice) ){
        console.log("It is a tie")
    } else if (
        (userChoice === "scissors" && computerChoice === "rock") ||
        (userChoice === "rock" && computerChoice === "paper") ||
        (userChoice === "paper" && computerChoice === "scissors")
    ) {
        console.log("The computer wins")
    } else {
        console.log("Please check the input")
    }

}