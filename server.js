const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Hola, me llamo Diego y estudio Ing. de sistemas';

app.get('/', (req, res) => {
  res.send(MESSAGE);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
