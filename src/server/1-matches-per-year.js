
const matchData = require("/home/srikanth/js-IPL-project/src/public/output/matchesPerYear.json" );

const storeOutput = require("./output.js");

//Number of matches played per year for all the years in IPL.

  
function getMatchesPerYear(matches){

  const result =  matches.reduce((acc,match) =>{

     if(acc[match.season]){

       acc[match.season]++;

     }else{
      
       acc[match.season] = 1;
     }
     return acc;

   },{})

   return result;
 }
  

  const matchesPerYear = getMatchesPerYear(matchData);

  console.log("Number of matches played per year in IPL : ");

  for (const year in matchesPerYear) {

    console.log(`${year}: ${matchesPerYear[year]} matches`);

  }
  
  storeOutput("../public/output/1-matchesPerYear.json",matchesPerYear);





 

 
  

