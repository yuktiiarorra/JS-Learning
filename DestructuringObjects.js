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

// const firstName = user.firstName;
// const lastName = user.lastName;

// firstName
// 'Harvey'
// lastName
// 'Milk'

// const {email} = user;

// email
// 'harvey@gmail.com'

// const {email, firstName, lastName, city, bio} = user;

// email
// 'harvey@gmail.com'
// firstName
// 'Harvey'
// lastName
// 'Milk'
// city
// 'San Francisco'
// bio
// 'Harvey Bernard Milk was an American politician'
// user
// {email: 'harvey@gmail.com', password: 'sCoTt1948sMiTh', firstName: 'Harvey', lastName: 'Milk', born: 1930, …}

// const {born} = user;
// born
// 1930

// const {born: birthYear, died: deathYear} = user;
// birthYear
// 1930
// deathYear
// 1978

// // const {born: birthYear, died: deathYear = "N/A"} = user;
// // deathYear
// // 1978 

const user2 = {
    email: "Stacy@gmail.com",
    firstName: "Stacy",
    lastName: "Gonzalez",
    born: 1987,
    city: "Tulsa",
    state: "Oklahoma" 
}

// const {city, state, died} = user2;
// died
// undefined

const {city, state, died = "N/A"} = user2;
// died
// 'N/A'