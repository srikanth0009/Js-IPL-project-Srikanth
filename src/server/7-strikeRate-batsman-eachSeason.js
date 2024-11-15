const deliveries = require("../public/output/deliveries.json" );
const matches = require("../public/output/matchesPerYear.json" );

const storeOutput = require("./output.js");

//Find the strike rate of a batsman for each season


function getStrikeRateOfBatsmanEachSeason(matches,deliveries){

  
  const matchIdToSeason = matches.reduce((acc, match) => {
    acc[match.id] = match.season;
    return acc;
  }, {});
  
  const batsmanStats = deliveries.reduce((acc, delivery) => {
    const season = matchIdToSeason[delivery.match_id];
    const batsman = delivery.batsman;
  
    if (!acc[batsman]) {
      acc[batsman] = {};
    }
    if (!acc[batsman][season]) {
      acc[batsman][season] = { runs: 0, balls: 0 };
    }
  
    acc[batsman][season].runs += parseInt(delivery.batsman_runs);
    acc[batsman][season].balls += 1;
  
    return acc;

  }, {});

  console.log(batsmanStats);


  const batsmanStrikeRates = Object.entries(batsmanStats).reduce((acc, [batsman, seasons]) => {
    acc[batsman] = {};
  
    for (const [season, stats] of Object.entries(seasons)) {
      const strikeRate = (stats.runs / stats.balls) * 100;
      acc[batsman][season] = strikeRate.toFixed(2); 
    }
  
    return acc;
  }, {});
  
  return batsmanStrikeRates;
  
}


const result = getStrikeRateOfBatsmanEachSeason(matches,deliveries);

console.log(result);

storeOutput("../public/output/7-strikeRateOfEachBatsmanEachSeason.json",result);
