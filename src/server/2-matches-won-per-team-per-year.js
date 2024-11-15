


const matchData = require("../public/output/matchesPerYear.json");

const storeOutput = require("./output.js");
//Number of matches won per team per year in IPL.



function getWinsPerTeamPerYear(matches) {

  const result = matches.reduce((acc, match) => {

    let year = match.season;
    let win = match.winner;
    
    if(win.length === 0){
      return acc;
    }

    if (acc[year]) {

      if (acc[year][win]) {

        acc[year][win]++;
      }
      else {
       
        acc[year][win] = 1;
      }
    }
    else {
      acc[year] = {};
      acc[year][win]=1;
    }
    return acc;
  }, {})
  //console.log(result);
  return result;
}

const winsPerTeamPerYear = getWinsPerTeamPerYear(matchData);

console.log("Number of matches won per team per season in IPL:");

console.log(winsPerTeamPerYear);

storeOutput("../public/output/2-matchesOwnPerTeamPerYear.json",winsPerTeamPerYear);


