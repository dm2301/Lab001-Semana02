const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Mundo';

app.get('/', (req, res) => {
  res.send(`Hola ${MESSAGE}`);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
