// print "hello"
// sleep 3000
// print "are you still there?"

// print "hello"
// pause(3000)
// print "are you still there?"

// setTimeout(() => {
//     console.log("HELLO!!!")
// }, 3000)

// HELLO!!!

// setTimeout(console.log("HELLO!!!"), 3000)

console.log("HELLO!!!...")
setTimeout(() => {
    console.log("are you still there?")
}, 3000)
console.log("GOODBYE!")

// HELLO!!!...
// setTimeout&setInterval.js:21 GOODBYE!
// setTimeout&setInterval.js:19 are you still there?

// setInterval(() => {
//     console.log(Math.random())
// }, 2000);

// 0.5054770449325934
// setTimeout&setInterval.js:28 0.09719657990187258
// setTimeout&setInterval.js:28 0.09508889998120873
// setTimeout&setInterval.js:28 0.10327578837694351

const id = setInterval(() => {
        console.log(Math.random())
}, 2000);

// 0.5371664454347613
// setTimeout&setInterval.js:37 0.5398909449763605
// id
// 2
// setTimeout&setInterval.js:37 0.0855357750849326
// setTimeout&setInterval.js:37 0.12603446820938102
// setTimeout&setInterval.js:37 0.3589648521799753
// setTimeout&setInterval.js:37 0.08443181879507278
// setTimeout&setInterval.js:37 0.23528426246046652
// setTimeout&setInterval.js:37 0.08146455766845828
// setTimeout&setInterval.js:37 0.2807091992541486
// setTimeout&setInterval.js:37 0.7230946915710836
// setTimeout&setInterval.js:37 0.5620134403586023
// id
// 2
// setTimeout&setInterval.js:37 0.5834190415449652
// setTimeout&setInterval.js:37 0.12643924117708605
// setTimeout&setInterval.js:37 0.5699443988907826
// id
// 2
// clearInterval(id)
// undefined