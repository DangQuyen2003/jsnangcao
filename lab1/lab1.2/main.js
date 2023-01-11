


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Docrtmund',
    players:[
        [
            'neuer',
            'pavard',
            'martiner',
            'alaba',
            'davier',
        ],
        [
            'burki',
            'schulz',
            'hummels',
            'akanji',
            'hakimi',
        ],
    ],
    score: '4:0',
    score: ['lewandowski', 'gnarby', 'lewandowski', 'hummels'],
    date: 'now 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};


//1
for (const [i, player] of game.scored.entries()){
    console.log(`goal ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);
let average = 0;
for (const odd of odds){
    average += odd;
    average /= odds.length;
    console.log(average);
}

//3
for(const [team, odd] of Object.entries(game.odds)){
    const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
    console.log(`odd of ${teamStr} ${odd}`);
}