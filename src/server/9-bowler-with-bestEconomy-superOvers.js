const deliveries = require("/home/srikanth/js-IPL-project/src/public/output/deliveries.json" );


const hii = require("./output.js");

//Find the bowler with the best economy in super overs

function getBestEconomyBowlerInSuperOvers(deliveries){

    const superOvers = deliveries.filter(delivery => delivery.is_super_over !== '0');
    //console.log(superOvers);

    const output = superOvers.reduce((acc,curr) => {
        
        let bowlerName = curr.bowler;
        let totalRuns = parseInt(curr.total_runs);
        let wideBallRuns = parseInt(curr.wide_runs);
        let noBallRuns = parseInt(curr.noball_runs);

        if(!acc[bowlerName]){

            acc[bowlerName]={bolls:0,runs:0};
            
        }else{
            if(wideBallRuns === 0 && noBallRuns === 0){

                acc[bowlerName].bolls = acc[bowlerName].bolls + 1;
            }
        }

        acc[bowlerName].runs = acc[bowlerName].runs + totalRuns;
       
        return acc;
    },{});

    const finalOutput = getEconomy(output);
    
    return finalOutput;
}

function getEconomy(output){

    let res = 0;
    let name = '';
    const obj = {name:'',economy:3345};
    
    for(let x in output){

        
        let eco = output[x].runs/(Math.ceil(output[x].bolls/6));
        
        if(eco<obj.economy){
            obj.economy = eco;
            obj.name = x;
        }
    }
    return obj;

}


const result = getBestEconomyBowlerInSuperOvers(deliveries);
console.log("Bowler with best economy in super overs:")
console.log(result);

hii("../public/output/9-bowlerWithBestEconomyInSuperOvers.json",result);

