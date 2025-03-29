let input = prompt("Hey, say something!")
while(true)
{
    if(input.toLowerCase() === "stop copying me") break;
    input = prompt(input);
}
console.log("OK YOU WIN!");

for(let i = 1; i < 1000; i++)
{
    console.log(i);
    if(i % 2 === 0) break;
}

// OK YOU WIN!
// breakKeyword.js:11 1
// breakKeyword.js:11 2