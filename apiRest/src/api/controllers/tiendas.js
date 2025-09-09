const Tienda = require('../models/tiendas');

const getTiendas = async (req, res, next) => {
  try {
    const tiendas = await Tienda.find().populate('figuras');
    res.status(200).json(tiendas);
  } catch {
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
    res.status(500).json({ message: 'Error al crear tienda', error: error.message });
  }
};

const putTienda = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedTienda = await Tienda.findByIdAndUpdate(id, updateData, { new: true }).populate('figuras');
    if (!updatedTienda) return res.status(404).json({ message: 'Tienda no encontrada' });

    res.status(200).json(updatedTienda);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar tienda', error: error.message });
  }
};

const deleteTienda = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deletedTienda = await Tienda.findByIdAndDelete(id);
    if (!deletedTienda) return res.status(404).json({ message: 'Tienda no encontrada' });

    res.status(200).json({ message: 'Tienda eliminada correctamente', tienda: deletedTienda });
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar tienda', error: error.message });
  }
};

module.exports = { getTiendas, getTiendaById, postTienda, putTienda, deleteTienda };