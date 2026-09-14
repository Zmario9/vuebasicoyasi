const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar JSON en el cuerpo de las peticiones
app.use(express.json());

// Definición de rutas principales
app.get('/', (req, res) => {
  res.send('¡Hola desde el servidor Node + Express!');
});

// Escuchar peticiones en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});