// TEAM - PLAYERS
const team = {
  _players:[
  {
  firstName: 'Pablo',
  lastName: 'Sanchez',
  age: 31
  },
    {
  firstName: 'Jon',
  lastName: 'Smith',
  age: 20
  },
     {
  firstName: 'Mike',
  lastName: 'Brown',
  age: 23
  }
  ], 
  
  // GAME - STATS
  
  _games:[
    {
  opponent: 'Dinos',
  teamPoints: 30,
  opponentPoints: 28
},
    {
  opponent: 'Bulls',
  teamPoints: 32,
  opponentPoints: 37
},
    {
  opponent: 'Lakers',
  teamPoints: 41,
  opponentPoints: 30
}
  ],
  
// METHODS FOR PLAYERS & GAMES  
  
  get players() {
    return this._players
  },
  get games() {
    return this._games
  },
  addPlayer(firstName, lastName, age)  {
    this._players.push({firstName, lastName, age})
  },
  addGame(opponent, teamPoints, opponentPoints) {
    this._games.push({opponent, teamPoints, opponentPoints})
  }
}

// ADD NEW PLAYERS & GAMES

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Clippers', 45, 36);
team.addGame('Celtics', 48, 51);

// INVOKE addGame METHOD

console.log(team.players);
console.log(team.games);
