const csv = require('csv-parser');
const fs = require('fs');
let path = 'C:/Users/naps/Desktop/snjv/reactapp/aynch_programming_js/Audience.csv';

fs.createReadStream(path)
  .pipe(csv())
  .on('data', (row) => {
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });
