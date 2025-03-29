let count = 0;
while(count < 10)
{
    count++;
    console.log(count);
}

const SECRET = "BabyHippo";

let guess = prompt("enter the secret code...");
while(guess !== SECRET)
{
    guess = prompt("enter the secret code...");
}
console.log("CONGRATS YOU GOT THE SECRET!!!")

// 1
// whileLoop.js:5 2
// whileLoop.js:5 3
// whileLoop.js:5 4
// whileLoop.js:5 5
// whileLoop.js:5 6
// whileLoop.js:5 7
// whileLoop.js:5 8
// whileLoop.js:5 9
// whileLoop.js:5 10
// whileLoop.js:15 CONGRATS YOU GOT THE SECRET!!!

