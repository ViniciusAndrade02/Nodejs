const url = require('url')

const link = 'https://www.leite.com/catalog?produto=cadeira'
const parseURL = new url.URL(link)

console.log(parseURL.host)
console.log(parseURL.pathname)
console.log(parseURL.search)
console.log(parseURL.searchParams)
console.log(parseURL.searchParams.get('produto'))