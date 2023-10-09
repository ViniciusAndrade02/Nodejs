const fs = require('fs')

fs.rename('arquivo.txt','leite.php', function(err){

  if(err){
    console.log('Deu algum erro: ' + err)
    return
  }

  console.log('modificado')
})