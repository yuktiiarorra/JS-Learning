let input = prompt("What would you like to do?");

const toDo = [];

while(input !== "quit" && input !== "q")
{
    if(input === "new")
    {
        const task = prompt("Enter new todo");
        console.log(`${task} added to the list!`);
        toDo.push(task);
    }
    else if(input === "list")
    {
        console.log("*********");
        for(let i = 0; i < toDo.length; i++)
        {
            console.log(`${i}: ${toDo[i]}`);
        }
        console.log("*********");
    }
    else if(input === "delete")
    {
        const remove = prompt("Enter index of todo to delete");
        const deleted = toDo.splice(remove, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
    }
    input = prompt("What would you like to do?");
}
console.log("OK! YOU QUIT THE APP");