const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const doubles = numbers.map(function(num)
{
    return num * 2;
})

// doubles
// (10) [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

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

const titles = movies.map(function(movie)
{
    return movie.title.toUpperCase();
})

// titles
// (4) ['AMADEUS', 'STAND BY ME', 'PARASITE', 'ALIEN']

// const newMovies = movies.map(function(movie){
//     return `${movie.title} - ${movie.score / 10}`
// })

// newMovies
// (4) ['Amadeus - 9.9', 'Stand By Me - 8.5', 'Parasite - 9.5', 'Alien - 9']

const newMovies = movies.map((movie) => {
    return `${movie.title} - ${movie.score / 10}`
})

// const newMovies = movies.map(movie => {
//     return `${movie.title} - ${movie.score / 10}`
// })

// const newMovies = movies.map(movie => (
//     `${movie.title} - ${movie.score / 10}`
// ))

// const newMovies = movies.map(movie => `${movie.title} - ${movie.score / 10} )

// newMovies
// (4) ['Amadeus - 9.9', 'Stand By Me - 8.5', 'Parasite - 9.5', 'Alien - 9']