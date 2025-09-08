require('dotenv').config();
const connectDB = require('../../config/db');
const Tienda = require('../../api/models/tiendas');
const Figura = require('../../api/models/figuras');

const seedTiendas = async () => {
  try {
    await connectDB();

    await Tienda.deleteMany();

    const tiendas = [
      {
        nombre: 'Tierra Media',
        direccion: 'Calle José del Toro 6, Cádiz',
        figuras: [],
        abierta: true
      },
      {
        nombre: 'Akira Comics',
        direccion: 'Avenida de Betanzos 74, Madrid',
        figuras: [],
        disponible: true
      }
    ];

    await Tienda.insertMany(tiendas);
    console.log('Tiendas añadidas correctamente');
    process.exit();
  } catch (error) {
    console.error('Error creando seed de tiendas:');
    process.exit(1);
  }
};

seedTiendas();