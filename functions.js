// let die1 = Math.floor(Math.random() * 6) + 1;
// let die2 = Math.floor(Math.random() * 6) + 1;
// let die3 = Math.floor(Math.random() * 6) + 1;
// let die4 = Math.floor(Math.random() * 6) + 1;
// let die5 = Math.floor(Math.random() * 6) + 1;
// let die6 = Math.floor(Math.random() * 6) + 1;

// let die1 = rollDie(6);
// let die2 = rollDie(20);
// let die3 = rollDie(20);
// let die4 = rollDie(8);
// let die5 = rollDie(3);
// let die6 = rollDie(4);

singSong();
singSong();

function singSong()
{
    console.log("DO");
    console.log("RE");
    console.log("MI");
}

// singSong
// ƒ singSong()
// {
//     console.log("DO");
//     console.log("RE");
//     console.log("MI");
// }

// alert
// ƒ alert() { [native code] }

// kuhsdf
// VM491:1 Uncaught ReferenceError: kuhsdf is not defined
//     at <anonymous>:1:1

singSong();
singSong();

// DO
// functions.js:18 RE
// functions.js:19 MI
// functions.js:17 DO
// functions.js:18 RE
// functions.js:19 MI

// singSong()
// functions.js:17 DO
// functions.js:18 RE
// functions.js:19 MI
// undefined
// singSong()
// functions.js:17 DO
// functions.js:18 RE
// functions.js:19 MI
// undefined

// console.log("DO");
// console.log("RE");
// console.log("MI");

// "hello".toUpperCase();
// "hello".indexOf('h');

// function greet(firstName)
// {
//     console.log(`Hey there, ${firstName}!`)
// }

// greet("Elvis")
// functions.js:70 Hey there, Elvis!
// undefined
// greet(5465756797)
// functions.js:70 Hey there, 5465756797!
// undefined
// greet()
// functions.js:70 Hey there, undefined!
// undefined

function greet(firstName, lastName)
{
    console.log(`Hey there, ${firstName} ${lastName[0]}.`)
}

greet("George", "Clooney");
greet("Clooney", "George");

// Hey there, George C.
// Hey there, Clooney G.
// greet("Elvis", )
// functions.js:85 Uncaught TypeError: Cannot read properties of undefined (reading '0')
//     at greet (functions.js:85:52)
//     at <anonymous>:1:1

function repeat(str, count)
{
    let result = "";
    for(let i = 0; i < count; i++)
    {
        result += str;
    }
    console.log(result);
}

// repeat("YO", 5)
// functions.js:101 YOYOYOYOYO
// undefined
// repeat(5, "YO")
//
// undefined

function add(x, y)
{
    if(typeof x !== "number" || typeof y !== "number")
    {
        return false;
    }
    return x + y; // return [1, 2]
    console.log("END OF FUNCTION!!")
}

// const sum = add(9, 5)
// undefined
// sum
// 14
// add(99, 4)
// 103
// add(99, "str")
// false
// add(add(99, 4), 5)
// 108
// let sum = add(add(99, 4), 5)
// undefined
// sum
// 108

let totalEggs = 0;
function collectEggs()
{
    totalEggs = 6;
}
console.log(totalEggs);
collectEggs();
console.log(totalEggs);

// 0
// 6

let bird = "Scarlet Macaw";
function birdWatch()
{
    // console.log(bird);
    // functions.js:155 Uncaught ReferenceError: Cannot access 'bird' before initialization
    // at birdWatch (functions.js:155:17)
    // at functions.js:159:1
    let bird = "Great Blue Heron";
    console.log(bird);
}
birdWatch()
console.log(bird);

// Great Blue Heron
// functions.js:163 Scarlet Macaw

// Scarlet Macaw
// functions.js:163 Scarlet Macaw

let radius = 8;
if(radius > 0)
{
    const PI = 3.14159;
    let msg = "HIII!";
}

console.log(radius);
console.log(msg);

// 8
// functions.js:179 Uncaught ReferenceError: msg is not defined
// at functions.js:179:13

for(let i = 0; i < 5; i++)
{
    let msg = "djhdwhkdfkjd";
}
console.log(msg);

// Uncaught ReferenceError: msg is not defined
//     at functions.js:179:13

for(var i = 0; i < 5; i++)
{
    var msg = "djhdwhkdfkjd";
}
console.log(msg);
console.log(i);
// djhdwhkdfkjd
// functions.js:199 5

function bankRobbery()
{
    const heroes = ["Spiderman", "Wolverine", "Black Panther", "Batwoman"]
    function cryForHelp()
    {
        // let color = "purple";
        function inner()
        {
            for(let hero of heroes)
            {
                console.log(`PLEASE HELP US, ${hero.toUpperCase()}`);
            }
        }
        inner();
    }
    cryForHelp();
}
bankRobbery();

// PLEASE HELP US, SPIDERMAN
// functions.js:210 PLEASE HELP US, WOLVERINE
// functions.js:210 PLEASE HELP US, BLACK PANTHER
// functions.js:210 PLEASE HELP US, BATWOMAN

// function sum(x, y)
// {
//     return x + y;
// }
// sum(3, 4);
// 7

const sum = function(x, y)
{
    return x + y;
}

// sum(3, 4)
// 7
function callTwice(func)
{
    func();
    func();
}

function rollDie()
{
    const roll = Math.floor(Math.random() * 6 + 1);
    console.log(roll);
}

// rollDie()
// functions.js:250 6
// undefined
// rollDie()
// functions.js:250 1
// undefined

// callTwice(rollDie());

// callTwice(rollDie);

// 4
// functions.js:250 1

function callTenTimes(f)
{
    for(let i = 0; i < 10; i++)
    {
        f();
    }
}

// callTenTimes(rollDie)
// functions.js:250 6
// functions.js:250 5
// functions.js:250 3
// 2 1
// functions.js:250 6
// functions.js:250 4
// functions.js:250 1
// functions.js:250 6
// functions.js:250 5
// undefined

function makeMysteryFunc()
{
    const rand = Math.random();
    if(rand > 0.5)
    {
        return function()
        {
            console.log("CONGRATS, I AM A GOOD FUNCTION!")
            console.log("YOU WIN A MILLION DOLLARS!!")
        }
    }
    else
    {
        return function()
        {
            alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
            alert("STOP TRYING TO CLOSE THIS WINDOW!")
        }
    }
}

// makeMysteryFunc()
// ƒ ()
//         {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
// makeMysterFunc()
// ƒ ()
//         {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }

const mystery = makeMysteryFunc();

// mystery
// ƒ ()
//         {
//             alert("YOU HAVE BEEN INFECTED BY A COMPUTER VIRUS")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//             alert("STOP TRYING TO CLOSE THIS WINDOW!")
//         }
// mystery
// ƒ ()
//         {
//             console.log("CONGRATS, I AM A GOOD FUNCTION!")
//             console.log("YOU WIN A MILLION DOLLARS!!")
//         }

// mystery()

function makeBetweenFunc(min, max)
{
    return function(num)
    {
        return num >= min && num <= max; 
    }
}

// const isChild = makeBetweenFunc(0, 18)
// undefined
// isChild(40)
// false
// isChild(18)
// true
// const isAdult = makeBetweenFunc(19, 64)
// undefined
// const isSenior =  makeBetweenFunc(65, 120)
// undefined
// isAdult(27)
// true
// isSenior(68)
// true
// isChild
// ƒ (num)
//     {
//         return num >= min && num <= max; 
//     }

const myMath = {
    PI: 3.14159,
    square: function(num)
    {
        return num * num;
    },
    cube: function(num)
    {
        return num ** 3;
    }
}

// myMath
// {PI: 3.14159, square: ƒ, cube: ƒ}
// myMath.PI
// 3.14159
// myMath.square
// ƒ (num)
//     {
//         return num * num;
//     }
// myMath.square(2)
// 4
// myMath.cube(2)
// 8
// myMath["cube"](4)
// 64

const ourMath = {
    PI: 3.14159,
    square(num)
    {
        return num * num;
    },
    cube(num)
    {
        return num ** 3;
    }
}

// ourMath.cube(2)
// 8

const cat = {
    name: "Blue Steele",
    color: "grey",
    breed: "scottish fold",
    meow()
    {
        console.log("THIS IS:", this)
        console.log(`${this.name} says MEOWWWW`);
    }
}

// cat.meow()
// Blue Steele says MEOWWWW
// undefined

const meow2 = cat.meow; 

// meow2
// ƒ meow()
//     {
//         console.log("THIS IS:", this)
//         console.log(`${this.name} says MEOWWWW`);
//     }
// meow2()
// THIS IS: Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//   says MEOWWWW

// cat.meow()
// functions.js:424 THIS IS: {name: 'Blue Steele', color: 'grey', breed: 'scottish fold', meow: ƒ}
// functions.js:425 Blue Steele says MEOWWWW

// function scream(){
//     console.log("AHHHHHHAHHHHHHHAHHHHHHHHHHH");
// }
// undefined
// scream()
// VM3984:2 AHHHHHHAHHHHHHHAHHHHHHHHHHH
// undefined
// window.scream()
// VM3984:2 AHHHHHHAHHHHHHHAHHHHHHHHHHH
// undefined
// window.scream
// ƒ scream(){
//     console.log("AHHHHHHAHHHHHHHAHHHHHHHHHHH");
// }
// this
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}

// const addition = function(x,y)
// {
//     return x + y;
// }

// const addition = (x, y) => {
//     return x + y;
// }

// addition(5, 7)
// 12

const square = (x) => {
    return x * x;
}

// square(9)
// 81

const cube = x => {
    return x ** 3;
}

// cube(2)
// 8

// const rollDieAgain = () => {
//     return Math.floor(Math.random() * 6 + 1);
// }

// rollDieAgain()
// 2

// Math.random() => [0, 1) 
// Math.random() * 6 => [0, 6) 
// Math.random() * 6 + 10=> [10, 16)
// Math.floor(Math.random() * 6 + 10) => {10, 11, ...., 15}
// console.log(Math.floor(Math.random() * 6 + 10));

const rollDieAgain = () => (
    Math.floor(Math.random() * 6 + 1)
);

// rollDieAgain()
// 6

const addition = (x, y) => x + y;

// addition(4, 8)
// 12

// const rollDieAgain = () => (
//     console.log("hddkjkdjsv")
//     Math.floor(Math.random() * 6 + 1)
// );