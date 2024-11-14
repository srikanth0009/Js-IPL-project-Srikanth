
const matchData = require("/home/srikanth/js-IPL-project/src/public/output/matchesPerYear.json");

const hii = require("./output.js");

//Find the number of times each team won the toss and also won the match

function getEachTeamWonTossAndMatch(matches){

    const teams = {};

    matches.forEach(match => {
        
        let tosWinner = match.toss_winner;
        let matchWinner = match.winner;

        if(tosWinner === matchWinner){

            if(!teams[matchWinner]){
                teams[tosWinner] = 1;
            }else{
                teams[matchWinner]++;
            }
        }
    });

    //console.log(teams);
    return teams;
}



const result = getEachTeamWonTossAndMatch(matchData);
console.log("Number of times each team won the toss and match : ")
console.log(result)

hii("../public/output/5-numberOfTimesEachTeamWonTossAndMatch.json",result);

