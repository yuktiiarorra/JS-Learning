const subreddits = ["cringe", "books", "chickens", "funny", "pics", "soccer", "gunner"];

const fn = function(subreddit){
    console.log(subreddit.toUpperCase());
}

subreddits.forEach(fn);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// function print(element)
// {
//     console.log(element)
// }
// numbers.forEach(print)

// 1
// 2
// 3
// forEachLoop.js:12 4
// forEachLoop.js:12 5
// forEachLoop.js:12 6
// forEachLoop.js:12 7
// forEachLoop.js:12 8
// forEachLoop.js:12 9
// forEachLoop.js:12 10


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (el)
{
    if(el % 2 == 0)
    {
        console.log(el)
    }
})

// 2
// forEachLoop.js:21 4
// forEachLoop.js:21 6
// forEachLoop.js:21 8
// forEachLoop.js:21 10

const movies = [
    {
        title: "Amadeus",
        score: 99
    },
    {
        title: "Stand By Me",
        score: 85
    },
    {
        title: "Parasite",
        score: 95
    },
    {
        title: "Alien",
        score: 90
    }
]

movies.forEach(function(movie)
{
    console.log(`${movie.title} - ${movie.score}/100`)
})

// forEachLoop.js:46 Amadeus - 99/100
// forEachLoop.js:46 Stand By Me - 85/100
// forEachLoop.js:46 Parasite - 95/100
// forEachLoop.js:46 Alien - 90/100