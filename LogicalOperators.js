const password = prompt("Enter your password");

if(password.length >= 6 && password.indexOf(' ') === -1)
{
    console.log("VALID PASSWORD!");
}
else
{
    console.log("INCORRECT FORMAT FOR PASSWORD");
}

const age = -10;
if (age >= 0 && age < 5 || age >= 65)
{
    console.log("FREE");
}
else if (age >= 5 && age < 10)
{
    console.log("$10");
}
else if (age >= 10 && age < 65)
{
    console.log("$20");
}
else
{
    console.log("INVALID AGE!");
}

let firstName = prompt("enter your first name");
if(!firstName) 
{
    firstName = prompt("TRY AGAIN!");
}

const age2 = -10;
if (!(age2 >= 0 && age2 < 5 || age2 >= 65))
{
    console.log("YOU ARE NOT ABABY OR A SENIOR!");
}