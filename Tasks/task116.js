/*
Let's get on with our soccer betting app ⚽💰! 
Continue using the previously used game variable.
1. Loop through the game.scored array and print the name of each player to the console along with the goal number (example: “Goal 1 - Kroos”)
2. Use a loop to calculate the average odd and print it to the console 
3. Print 3 odds to the console, but formatted, exactly like this:
Rate for REAL MADRID victory: 1.48 
Rate for draw: 2.53
Rate for BARCELONA victory: 4.25
Get team names directly from the game object, don't hardcode them 
4. Bonus: create an object called goalScorers that contains the names of the players who scored as properties and the number of goals as a value. In this game it will look like this:
      {
        Kroos: 1,
        Benzema: 1,
        Mingueza: 1
}
*/

const game = {
   team1: 'REAL MADRID',
   team2: 'BARCELONA',
   players: [
      [
         'Courtois',
         'Vazquez',
         'Militao',
         'Nacho',
         'Mendy',
         'Casemiro',
         'Valverde',
         'Modrich',
         'Kroos',
         'Vinicius',
         'Benzema',
      ],
      [
         'Stegen',
         'Mingueza',
         'Araujo',
         'Lenglet',
         'Dest',
         'Busquets',
         'Jong',
         'Alba',
         'Messi',
         'Pedri',
         'Dembele',
      ],
   ],
   score: '2:1',
   scored: ['Kroos', 'Benzema', 'Mingueza'],
   date: 'Apr 10th, 2021',
   odds: {
      team1: 1.48,
      draw: 2.53,
      team2: 4.25,
   },
};


// 1.
console.log('**********************TASK 1**********************');
for (let [index, playerName] of game.scored.entries()) {
   console.log(`Goal ${index + 1} - ${playerName}`);
}


// 2.
console.log('**********************TASK 2**********************');
let summ = 0;
const values = Object.values(game.odds);
for (let value of values) {
   summ += value;
}
console.log(summ / values.length);


// 3.
console.log('**********************TASK 3**********************');
const entries = Object.entries(game.odds);
for (let [name, odd] of entries) {
   let team = game[name] ? `${game[name]} victory` : name;
   console.log(`Rate for ${team}: ${odd}`);
}


// 4.
console.log('**********************TASK 4**********************');
let arrScored = game.scored;
const goalScorers = {};

for (let player of arrScored) {
   goalScorers[player] = goalScorers[player] ? goalScorers[player]++ : 1;
}

console.log(goalScorers);

