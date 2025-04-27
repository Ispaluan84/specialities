const infoData = require('./data.js')
const express = require('express');
const app = express();
const PORT = 3000;
const url = require('node:url');

const http = require('node:http')
const server = http.createServer((req, res) => {
    const parseUrl = url.parse(req.url);
    const path = parseUrl.pathname;
    res.writeHead(200, {'Content-Type': 'text/html'});


    if(path === '/') {
        res.end(`
            <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Main Page</title>
</head>
<body>
    <h1>Main Page</h1>
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/sales">Sales</a>
    <a href="/qas">QAs</a>
    
</body>
</html>
`)} else if(path === '/marketing') {
    res.end (`
                  <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Marketing</title>
</head>
<body>
    <h1>Marketing</h1>
    <a href="/">Home</a>
    <a href="/developers">Developers</a>
    <a href="/sales">Sales</a>
    <a href="/qas">QAs</a>
    
</body>
</html>`
)} else if (path === '/developers') {
    res.end(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Developers</title>
  </head>
  <body>
    <h1>Developers</h1>
    <a href="/">Home</a>
    <a href="/marketing">Marketing</a>
    <a href="/sales">Sales</a>
    <a href="/qas">QAs</a>
  </body>
</html>`
)} else if (path === '/sales') {
    res.end(`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sales</title>
  </head>
  <body>
    <h1>Sales</h1>
    <a href="/">Home</a>
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/qas">QAs</a>
  </body>
</html>  `
)} else if (path === '/qas') {
    res.end(`
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>QAs</title>
  </head>
  <body>
    <h1>QAs</h1>
    <a href="/">Home</a>
    <a href="/marketing">Marketing</a>
    <a href="/developers">Developers</a>
    <a href="/sales">Sales</a>
  </body>
</html>    `
)} else {
    res.end(`
        <h1>Pagina no encotrada</h1>`)
}
}) 

server.listen(PORT, () => {
    console.log(`Node.js está escuchando en el puerto http://localhost:${PORT}`)
})