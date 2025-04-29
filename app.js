const infoData = require('./data.js');

const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
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
          <ul class="menu">
            <li><a href="/marketing">Marketing</a></li>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/ventas">Ventas</a></li>
            <li><a href="/QAs">QAs</a></li>
          </ul>
      </body>
      </html>`);
});

app.get('/:specialty', (req, res) => {
  const specialty = req.params.specialty.toLowerCase();

  const filtered = infoData.filter(user => user.specialty.toLowerCase() === specialty);

    if (filtered.length === 0) {
      return res.status(404).send(`<h1>404 - Specialty not found</h1> 
        <a href="/">Home</a>`);
      }
      const listItems = filtered.map(user => `<li>${user.name}, ${user.age} años</li>`).join('');
        res.end(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>${specialty}</title>
        
      </head>
      <body>
          <h1>Speciality: ${specialty}</h1>
          <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="/developers">Developers</a></li>
            <li><a href="/ventas">Ventas</a></li>
            <li><a href="/qas">QAs</a></li>

          <ul class="specialty">${listItems}</ul>
      </body>
    </html>`);
        });

app.listen(PORT, () => {
    console.log(`Servidor Express activo con puerto http://localhost:${PORT}`)
})