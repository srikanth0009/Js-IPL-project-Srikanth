const csv = require('csvtojson');
const fs = require('fs');

csv()
  .fromFile("/home/srikanth/js-IPL-project/src/data/matches.csv")
  .then((jsonObj) => {
    fs.writeFileSync('/home/srikanth/js-IPL-project/src/public/output/matchesPerYear.json', JSON.stringify(jsonObj, null, 2));
  })
  .catch((err) => {
    console.log('Error processing matches.csv:', err)
  })


csv()
  .fromFile("/home/srikanth/js-IPL-project/src/data/deliveries.csv")
  .then((jsonObj) => {
    fs.writeFileSync('/home/srikanth/js-IPL-project/src/public/output/deliveries.json', JSON.stringify(jsonObj, null, 2));
  })
  .catch((err) => {
    console.log('Error processing matches.csv:', err)
  })