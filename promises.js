let p = new Promise((resolve, reject) => {
    let a = Math.round((Math.random() ));
    if(a == 0) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})
p.then((message) => {
    console.log('this is  then ' + message)
}).catch((message) => {
    console.log('this is  catch ' + message)
})