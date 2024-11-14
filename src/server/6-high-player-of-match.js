
const matchData = require("/home/srikanth/js-IPL-project/src/public/output/matchesPerYear.json");

const hii = require("./output.js");

//Find a player who has won the highest number of Player of the Match awards for each season

function getWhoWonHighestPlayerOfMatchEachSeason(matches){

    const years = {};

    matches.forEach(match => {

        let year = match.season;
        let playerOfMatch = match.player_of_match;

        if(!years[year]){

            years[year] = {};

            if(!years[year][playerOfMatch]){
                years[year][playerOfMatch] = 1;
            }
            else{
                years[year][playerOfMatch]++;
            }
        }else{

            if(!years[year][playerOfMatch]){
                years[year][playerOfMatch] = 1;
            }
            else{
                years[year][playerOfMatch]++;
            }
        }

    });

    //console.log(years);


    const finalOutput = getHighestPlayerOfMatchData(years);

    return finalOutput;
        
}

function getHighestPlayerOfMatchData(years){

    const array = [];

    for(let x in years){

        const obj = {year:0, name:"" , playerOfMatch:0};

        for(let j in years[x]){

            if(years[x][j]>obj.playerOfMatch){
                obj.playerOfMatch = years[x][j];
                obj.name = j;
            }
        }
        obj.year=x;
        array.push(obj);
    }
    return array;
}


const result = getWhoWonHighestPlayerOfMatchEachSeason(matchData);

result.forEach(element => {
    console.log("In the season " + element.year + " the player " + element.name + " got highest player fo the match awards " + element.playerOfMatch);
})

hii("../public/output/6-highestPlayerOfMatchEachSeason.json",result);


