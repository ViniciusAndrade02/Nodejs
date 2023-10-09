const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;

const server = http.createServer((req, res) => {
  const link = url.parse(req.url, true);
  const name = link.query.name;

  if (!name) {
    fs.readFile('write.html', function (err, data) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
      }
    });
  } else {
    const atualizarname = name + '\r\n'
    fs.appendFile('arquivo.txt', atualizarname, function (err) {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Erro interno do servidor');
      } else {
        res.writeHead(302, { 'Location': '/' });
        res.end();
      }
    });
  }
});

server.listen(port, () => {
  console.log('Servidor rodando na porta ' + port);
});
