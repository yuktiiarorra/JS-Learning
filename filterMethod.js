const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

numbers.filter(n => {
    return n === 4;
})

// [4]

numbers.filter(n => {
    return n < 10;
})

// (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]

// numbers
// (10) [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const movies = [
    {
        title: "Amadeus",
        score: 99,
        year: 1984
    },
    {
        title: "Sharknado",
        score: 35,
        year: 2013
    },
    {
        title: "13 Going On 30",
        score: 70,
        year: 2004
    },
    {
        title: "Stand By Me",
        score: 85,
        year: 1986
    },
    {
        title: "Waterworld",
        score: 62,
        year: 1995
    },
    {
        title: "Jingle All The Way",
        score: 71,
        year: 1996
    },
    {
        title: "Parasite",
        score: 95,
        year: 2019
    },
    {
        title: "Notting Hill",
        score: 77,
        year: 1999
    },
    {
        title: "Alien",
        score: 90,
        year: 1979
    }
]

// const goodMovies = movies.filter(movie => {
//     return movie.score > 80
// })

// goodMovies
// (4) [{…}, {…}, {…}, {…}]
// 0
// : 
// {title: 'Amadeus', score: 99, year: 1984}
// 1
// : 
// {title: 'Stand By Me', score: 85, year: 1986}
// 2
// : 
// {title: 'Parasite', score: 95, year: 2019}
// 3
// : 
// {title: 'Alien', score: 90, year: 1979}
// length
// : 
// 4
// [[Prototype]]
// : 
// Array(0)

// const badMovies = movies.filter(m => m.score < 70)

// badMovies
// (2) [{…}, {…}]
// 0
// : 
// {title: 'Sharknado', score: 35, year: 2013}
// 1
// : 
// {title: 'Waterworld', score: 62, year: 1995}
// length
// : 
// 2
// [[Prototype]]
// : 
// Array(0)

const recentMovies = movies.filter(m => m.year > 2000)

// recentMovies
// (3) [{…}, {…}, {…}]
// 0
// : 
// {title: 'Sharknado', score: 35, year: 2013}
// 1
// : 
// {title: '13 Going On 30', score: 70, year: 2004}
// 2
// : 
// {title: 'Parasite', score: 95, year: 2019}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)

// movies
// (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0
// : 
// {title: 'Amadeus', score: 99, year: 1984}
// 1
// : 
// {title: 'Sharknado', score: 35, year: 2013}
// 2
// : 
// {title: '13 Going On 30', score: 70, year: 2004}
// 3
// : 
// {title: 'Stand By Me', score: 85, year: 1986}
// 4
// : 
// {title: 'Waterworld', score: 62, year: 1995}
// 5
// : 
// {title: 'Jingle All The Way', score: 71, year: 1996}
// 6
// : 
// {title: 'Parasite', score: 95, year: 2019}
// 7
// : 
// {title: 'Notting Hill', score: 77, year: 1999}
// 8
// : 
// {title: 'Alien', score: 90, year: 1979}
// length
// : 
// 9
// [[Prototype]]
// : 
// Array(0)

const goodTitles = goodMovies.map(m => m.title)

const badTitles = movies.filter(m => m.score < 70).map(m => m.title);
// const badTitles = movies
//                         .filter(m => m.score < 70)
//                                                   .map(m => m.title);