#! /usr/bin/env node
import inquirer from "inquirer";
console.log("\n\t Welcome-code-with-areeba-\n");
let answer = Math.floor(Math.random() * 5);
let randomNumber = await inquirer.prompt([
    {
        name: "value",
        type: "number",
        message: "Enter your guess number"
    }
]);
if (randomNumber.value === answer) {
    console.log("congratulations! you win");
}
else {
    console.log("sorry! you lose,try again");
}
