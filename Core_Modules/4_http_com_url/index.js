const http = require('http');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const urlinfo = url.parse(req.url, true);
  const name = urlinfo.query.name;

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');

  if (!name) {
    res.end(
      '<h1>PREENCHA SEU NOME:</h1>' +
      '<form method="GET"> <input type="text" name="name" /> </form>'
    );
  } else {
    res.end(`<h1>SEJA BEM VINDO ${name}</h1>`);
  }
});

server.listen(port, () => {
  console.log('servidor rodando');
});
