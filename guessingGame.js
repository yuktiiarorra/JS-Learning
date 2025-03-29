let maxNum = parseInt(prompt("Welcome! Enter your max number:"));
while(!maxNum)
{
    maxNum = parseInt(prompt("Enter a valid number:"));
}

const targetNum = Math.floor(Math.random() * maxNum) + 1;

let guess = prompt("enter your first guess: (Type 'q' too quit)");
let attempts = 1;

while(parseInt(guess) !== targetNum)
{
    if(guess === "q") break;
    guess = parseInt(guess);
    if(guess > targetNum) 
    {
        guess = prompt("Too High. Guess Again:");
        attempts++;
    }
    else if (guess < targetNum)
    {
        guess = prompt("Too Low. Guess Again:");
        attempts++; 
    }
    else
    {
        guess = prompt("Invalid guess. Please enter a number or 'q' to quit");
    }
}
if(guess === "q") console.log("OK YOU QUIT!")
else {console.log(`You got it! It took you ${attempts} guesses.`)}

// You got it! It took you 3 guesses.
// OK YOU QUIT!
