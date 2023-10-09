const { isUtf8 } = require('buffer')
const fs = require('fs')

fs.readFile('ler.txt','utf-8',(err,data) => {

  if(err){
    console.log('ERROR: ' + data);
    return
  }

  console.log(data)

})

let a=10,b=5

console.log(a+b)