const path = require('path')

console.log(path.resolve('text.txt')) //passar o diretorio completo

//juntar diretorios

const inicio = 'inicio'
const fim = 'fim'

const uniao = path.join('/','leite',inicio,fim)

console.log(uniao)
