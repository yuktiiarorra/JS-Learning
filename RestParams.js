// function print()
// {
//     console.log(arguments)
// }

// print()
// RestParams.js:3 Arguments [callee: ƒ, Symbol(Symbol.iterator): ƒ]
// undefined
// print(23, 45, 67)
// RestParams.js:3 Arguments(3) [23, 45, 67, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// undefined

// function sum()
// {
//     return arguments.reduce((total, el) => total + el)
// }

// sum(23, 45, 67)
// RestParams.js:8 Uncaught TypeError: arguments.reduce is not a function
//     at sum (RestParams.js:8:22)
//     at <anonymous>:1:1

function print(...nums)
{
    console.log(nums)
}

// print(23, 45, 67)
// RestParams.js:25 (3) [23, 45, 67]
// undefined
// print(23)
// RestParams.js:25 [23]
// undefined
// print(23, 984, 8743, 23, 23, 23, 23)
// RestParams.js:25 (7) [23, 984, 8743, 23, 23, 23, 23]
// undefined

function sum(...nums)
{
    return nums.reduce((total, el) => total + el)
}

// sum(23, 45, 67)
// 135

function raceResults(gold, silver, ...everyoneElse)
{
    console.log(`GOLD MEDAL GOES TO:${gold}`)
    console.log(`SILVER MEDAL GOES TO:${silver}`)
    console.log(`AND THANKS TO EVERYONE ELSE:${everyoneElse}`)
}

// raceResults("Tammy", "Todd", "Tina", "Trevor", "Travis")
// RestParams.js:48 GOLD MEDAL GOES TO:Tammy
// RestParams.js:49 SILVER MEDAL GOES TO:Todd
// RestParams.js:50 AND THANKS TO EVERYONE ELSE:Tina,Trevor,Travis
// undefined