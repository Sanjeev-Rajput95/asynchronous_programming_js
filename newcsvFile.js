const readFile = require('./csvFileReader')
let path = 'C:/Users/naps/Desktop/snjv/reactapp/aynch_programming_js/Audience.csv';
readFile(path).then((a) => {
    console.log("total number of element in array =" + a.length);
}).catch((b) => {
    console.log("this" +b)
})
