const express = require('express');

const app = express();
const MESSAGE = process.env.MESSAGE || 'Mundo';

app.get('/', (req, res) => {
  res.send(`Hola ${MESSAGE}`);
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
