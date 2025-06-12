const user = {
    email: "harvey@gmail.com",
    password: "sCoTt1948sMiTh",
    firstName: "Harvey",
    lastName: "Milk",
    born: 1930, 
    died: 1978,
    bio: "Harvey Bernard Milk was an American politician",
    city: "San Francisco",
    state: "California"
}

// function fullName(user){
//     return `${user.firstName} ${user.lastName}`
// }
// fullName(user)
// 'Harvey Milk'

// function fullName(user){
//     const {firstName, lastName} = user;
//     return `${firstName} ${lastName}`
// }
// fullName(user)
// 'Harvey Milk'

// function fullName({firstName, lastName}){
//     return `${firstName} ${lastName}`
// }

// fullName(user)
// 'Harvey Milk'

// function fullName({firstName, lastName = "hjsd"}){
//     return `${firstName} ${lastName}`
// }
// fullName(user)
// 'Harvey Milk'

function fullName({firstName, lastName, dob = 8732}){
    return `${firstName} ${lastName} ${dob}`
}

// fullName(user)
// 'Harvey Milk 8732'

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

movies.filter((movie) => movie.score >= 90)
// (3) [{…}, {…}, {…}]
// 0
// : 
// {title: 'Amadeus', score: 99, year: 1984}
// 1
// : 
// {title: 'Parasite', score: 95, year: 2019}
// 2
// : 
// {title: 'Alien', score: 90, year: 1979}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)

movies.filter(({score}) => score >= 90)
// (3) [{…}, {…}, {…}]
// 0
// : 
// {title: 'Amadeus', score: 99, year: 1984}
// 1
// : 
// {title: 'Parasite', score: 95, year: 2019}
// 2
// : 
// {title: 'Alien', score: 90, year: 1979}
// length
// : 
// 3
// [[Prototype]]
// : 
// Array(0)

movies.map(movie => {
    return `${movie.title} (${movie.year}) is rated ${movie.score}`
})
// (9) ['Amadeus (1984) is rated 99', 'Sharknado (2013) is rated 35', '13 Going On 30 (2004) is rated 70', 'Stand By Me (1986) is rated 85', 'Waterworld (1995) is rated 62', 'Jingle All The Way (1996) is rated 71', 'Parasite (2019) is rated 95', 'Notting Hill (1999) is rated 77', 'Alien (1979) is rated 90']
// 0
// : 
// "Amadeus (1984) is rated 99"
// 1
// : 
// "Sharknado (2013) is rated 35"
// 2
// : 
// "13 Going On 30 (2004) is rated 70"
// 3
// : 
// "Stand By Me (1986) is rated 85"
// 4
// : 
// "Waterworld (1995) is rated 62"
// 5
// : 
// "Jingle All The Way (1996) is rated 71"
// 6
// : 
// "Parasite (2019) is rated 95"
// 7
// : 
// "Notting Hill (1999) is rated 77"
// 8
// : 
// "Alien (1979) is rated 90"
// length
// : 
// 9
// [[Prototype]]
// : 
// Array(0)

movies.map(({title, year, score}) => {
    return `${title} (${year}) is rated ${score}`
})
// (9) ['Amadeus (1984) is rated 99', 'Sharknado (2013) is rated 35', '13 Going On 30 (2004) is rated 70', 'Stand By Me (1986) is rated 85', 'Waterworld (1995) is rated 62', 'Jingle All The Way (1996) is rated 71', 'Parasite (2019) is rated 95', 'Notting Hill (1999) is rated 77', 'Alien (1979) is rated 90']
// 0
// : 
// "Amadeus (1984) is rated 99"
// 1
// : 
// "Sharknado (2013) is rated 35"
// 2
// : 
// "13 Going On 30 (2004) is rated 70"
// 3
// : 
// "Stand By Me (1986) is rated 85"
// 4
// : 
// "Waterworld (1995) is rated 62"
// 5
// : 
// "Jingle All The Way (1996) is rated 71"
// 6
// : 
// "Parasite (2019) is rated 95"
// 7
// : 
// "Notting Hill (1999) is rated 77"
// 8
// : 
// "Alien (1979) is rated 90"
// length
// : 
// 9
// [[Prototype]]
// : 
// Array(0)