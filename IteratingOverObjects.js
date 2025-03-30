const testScores = {
    keenan: 80,
    damon: 67,
    kim: 89,
    shawn: 91,
    marlon: 72,
    dwayne: 77,
    nadia: 83,
    elvira: 97,
    diedre: 81,
    vonnie: 60
}

// for(let person of testScores)
// {
//     console.log(person);
// }
// forOfLoop.js:69 Uncaught TypeError: testScores is not iterable
//     at forOfLoop.js:69:19

for(let person in testScores)
{
    console.log(person);
    console.log(`${person} scored ${testScores[person]}`);
}

// keenan
// forOfLoop.js:79 keenan scored 80
// forOfLoop.js:78 damon
// forOfLoop.js:79 damon scored 67
// forOfLoop.js:78 kim
// forOfLoop.js:79 kim scored 89
// forOfLoop.js:78 shawn
// forOfLoop.js:79 shawn scored 91
// forOfLoop.js:78 marlon
// forOfLoop.js:79 marlon scored 72
// forOfLoop.js:78 dwayne
// forOfLoop.js:79 dwayne scored 77
// forOfLoop.js:78 nadia
// forOfLoop.js:79 nadia scored 83
// forOfLoop.js:78 elvira
// forOfLoop.js:79 elvira scored 97
// forOfLoop.js:78 diedre
// forOfLoop.js:79 diedre scored 81
// forOfLoop.js:78 vonnie
// forOfLoop.js:79 vonnie scored 60

// Object.values(testScores)
// (10) [80, 67, 89, 91, 72, 77, 83, 97, 81, 60]
// Object.entries(testScores)
// (10) [Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2), Array(2)]
// 0
// : 
// (2) ['keenan', 80]
// 1
// : 
// (2) ['damon', 67]
// 2
// : 
// Array(2)
// 0
// : 
// "kim"
// 1
// : 
// 89
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)
// 3
// : 
// (2) ['shawn', 91]
// 4
// : 
// (2) ['marlon', 72]
// 5
// : 
// (2) ['dwayne', 77]
// 6
// : 
// (2) ['nadia', 83]
// 7
// : 
// (2) ['elvira', 97]
// 8
// : 
// (2) ['diedre', 81]
// 9
// : 
// (2) ['vonnie', 60]
// length: 
// 10
// [[Prototype]]: Array(0)

let total = 0;
let scores = Object.values(testScores);
for(let score of scores)
{
    total += score;
}
console.log(total / scores.length);
// total
// 797
// testScores.length
// undefined
// 79.7