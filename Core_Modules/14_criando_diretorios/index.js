const fs = require('fs')

if(fs.existsSync('./pastachamadaleite')){
  console.log('existe')
}else{
  fs.mkdirSync('./pastachamadaleite')
  console.log('pasta criada')
}