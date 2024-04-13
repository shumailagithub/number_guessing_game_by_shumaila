#! /usr/bin/env node
import inquirer from "inquirer";
let roundNumber = Math.floor((Math.random() * 5) + 1);
let userInput = await inquirer.prompt({
    type: "number",
    name: "GuesseNumber",
    message: "Guess a Number between 1 till 5 ",
});
if (userInput.GuesseNumber === roundNumber) {
    console.log("Congatulations! your guess number is Correct!");
}
else {
    console.log(`Sorry! try one more time. Correct answer is: ${roundNumber}`);
}
