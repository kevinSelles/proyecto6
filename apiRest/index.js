require('dotenv').config();
const connectDB = require('./src/config/db');
const figuraRoutes = require('./src/api/routes/figuras');
const tiendaRoutes = require('./src/api/routes/tiendas');
const express = require('express');

const app = express();

app.use(express.json());

connectDB();

app.get('/', (req, res) => {
  try {
    res.status(200).json({ message: 'Todo salió OK' });
  } catch (error) {
    console.error("Error en la ruta /:", error);
    res.status(500).json({ message: 'Ha ocurrido un error en la ruta' });
  }
});

app.use('/api/figuras', figuraRoutes);
app.use('/api/tiendas', tiendaRoutes);

app.use((req, res, next) => {
  return res.status(404).json({message: "Route not found"});
});

app.listen(3000, () => {
  console.log("Servidor levantado en http://localhost:3000");
})