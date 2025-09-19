const Tienda = require('../models/tiendas');

const getTiendas = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find().populate('figuras');
    res.status(200).json(tiendas);
  } catch (error) {
    console.error('Error al obtener tiendas', error);
    res.status(500).json({ message: 'Error al obtener tiendas' });
  }
};

const getTiendaById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const tienda = await Tienda.findById(id).populate('figuras');
    if (!tienda) return res.status(404).json({ message: 'Tienda no encontrada' });
    res.status(200).json(tienda);
  } catch (error) {
    console.error('Error al obtener la tienda', error);
    res.status(500).json({ message: 'Error al obtener tienda', error: error.message });
  }
};

const postTienda = async (req, res, next) => {
  try {
    const { nombre, direccion, abierta } = req.body;
    if (!nombre) return res.status(400).json({ message: 'El nombre es obligatorio' });

    const nuevaTienda = new Tienda({ nombre, direccion, abierta, figuras: [] });
    await nuevaTienda.save();
    res.status(201).json(nuevaTienda);
  } catch (error) {
    console.error('Error al crear la tienda', error);
    res.status(500).json({ message: 'Error al crear tienda'});
  }
};

const putTienda = async (req, res) => {
  try {
    const { id } = req.params;
    const { agregar = [], eliminar = [], nombre, direccion, abierta } = req.body;

    const tienda = await Tienda.findById(id);
    if (!tienda) return res.status(404).json({ message: 'Tienda no encontrada' });

    if (nombre !== undefined) tienda.nombre = nombre;
    if (direccion !== undefined) tienda.direccion = direccion;
    if (abierta !== undefined) tienda.abierta = abierta;

    agregar.forEach(idFigura => {
      if (!tienda.figuras.includes(idFigura)) {
        tienda.figuras.push(idFigura);
      }
    });

    tienda.figuras = tienda.figuras.filter(idFigura => !eliminar.includes(idFigura.toString()));

    await tienda.save();
    await tienda.populate('figuras');
    res.status(200).json(tienda);

  } catch (error) {
    console.error('Error al actualizar tienda', error);
    res.status(500).json({ message: 'Error al actualizar tienda' });
  }
};

const deleteTienda = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTienda = await Tienda.findByIdAndDelete(id);
    if (!deletedTienda) return res.status(404).json({ message: 'Tienda no encontrada' });

    res.status(200).json({ message: 'Tienda eliminada correctamente', tienda: deletedTienda });
  } catch (error) {
    console.error('Error al borrar la tienda', error);
    res.status(500).json({ message: 'Error al eliminar tienda'});
  }
};

module.exports = { getTiendas, getTiendaById, postTienda, putTienda, deleteTienda };