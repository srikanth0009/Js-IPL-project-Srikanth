
const matchData = require("/home/srikanth/js-IPL-project/src/public/output/matchesPerYear.json");

const storeOutput = require("./output.js");

//Find the number of times each team won the toss and also won the match

function getEachTeamWonTossAndMatch(matches){

    const teams = {};

    matches.forEach(match => {
        
        let tosWinner = match.toss_winner;
        let matchWinner = match.winner;

        if(tosWinner === matchWinner){

            if(teams[matchWinner]){
                teams[matchWinner]++;
            }else{
                teams[tosWinner] = 1;
            }
        }
    });

    //console.log(teams);
    return teams;
}



const result = getEachTeamWonTossAndMatch(matchData);
console.log("Number of times each team won the toss and match : ")
console.log(result)

storeOutput("../public/output/5-numberOfTimesEachTeamWonTossAndMatch.json",result);

