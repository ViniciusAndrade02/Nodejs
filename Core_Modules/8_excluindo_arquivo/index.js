const fs = require('fs')

fs.unlink('html.html',function(err){
  if(err){
    console.log('Deu algum erro:' + err)
    return
  }
  console.log('arquivo excluido')
})