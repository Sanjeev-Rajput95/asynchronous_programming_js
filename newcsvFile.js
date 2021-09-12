const readFile = require('./csvFileReader')
let path = 'C:/Users/naps/Desktop/snjv/reactapp/aynch_programming_js/Audience.csv';
readFile(path).then((a) => {
    for(let i = 0 ; i < a.length-1 ; i++) {
         if("FTA4" == a[i].fname) {
          console.log(" the last name of person where the first name is FTA4 = " + a[i].lname);
      }
     if(a[i].fname = "FTA20") {
          console.log(" the fname  is  = " + a[i].fname)
     }
     if(a[i].fname == "Mandeep") {
         console.log(a[i])
     }

     }
}).catch((b) => {
    console.log("this" + b)
})
