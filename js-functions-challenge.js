var gameInfo = function(){
  return [
   {
     home_team: "Patriots",
     away_team: "Broncos",
     home_score: 7,
     away_score: 3
   },
   {
     home_team: "Broncos",
     away_team: "Colts",
     home_score: 3,
     away_score: 0
   },
   {
     home_team: "Patriots",
     away_team: "Colts",
     home_score: 11,
     away_score: 7
   },
   {
     home_team: "Steelers",
     away_team: "Patriots",
     home_score: 7,
     away_score: 21
   }
 ]
}
  var teamsArray = function(data){
    var array = [];
    for (var i = 0; i < gameInfo.length; i++){
      array.push()
    }
    array.sort(function (a, b) {
      if (a.value > b.value) {
        return 1;
      }
      if (a.value < b.value) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
  }

  teamArray.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  // a must be equal to b
  return 0;
});

  var Team = function Team(teamName, teamWins, teamLosses){
    this.name = teamName;
    this.rank = null;
    // = function(){
    //   for (var i = 0; i < teamsArray.length; i++){
    //
    //   };
    // };
    this.wins = teamWins;
    this.losses = teamLosses;
  };

  console.log(newTeam = new Team('pats', '2', '1'));
  console.log(newTeam.name);
