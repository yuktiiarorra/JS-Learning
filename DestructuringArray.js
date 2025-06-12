const scores = [9876, 8765, 8654, 7654, 6543, 5432];

const highScore = scores[0];
const secondHighScore = scores[1];

// highScore
// 9876
// secondHighScore
// 8765

// const [gold, silver, bronze] = scores;

// gold
// 9876
// silver
// 8765
// bronze
// 8654

const [gold, silver, bronze, ...everyoneElse] = scores;

// everyoneElse
// (3) [7654, 6543, 5432]