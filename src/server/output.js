const fs = require('fs');

function objToJSON(outputPath,res){
    fs.writeFile(outputPath, JSON.stringify(res, null, 2), (err) => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Data successfully written to file:', outputPath);
      }
    });
}
module.exports=objToJSON