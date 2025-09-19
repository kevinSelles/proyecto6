const Figura = require('../models/figuras');

const getAllFiguras = async (req, res, next) => {
  try {
    const figuras = await Figura.find();
    res.status(200).json(figuras);
  } catch (error) {
    console.error('Error al obtener figuras', error);
    res.status(500).json({ message: 'Error al obtener figuras' });
  }
};

const getFiguraById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const figura = await Figura.findById(id);
    if (!figura) {
      return res.status(404).json({ message: 'Figura no encontrada' });
    }
    res.status(200).json(figura);
  } catch (error) {
    console.error('Error al obtener la figura', error);
    res.status(500).json({ message: 'Error al obtener figura' });
  }
};

const getFigurasByPrecio = async (req, res, next) => {
  try {
    const { maxPrecio } = req.params;
    const figuras = await Figura.find({ precio: { $lt: Number(maxPrecio) } });
    res.status(200).json(figuras);
  } catch (error) {
    console.error('Error al obtener las figuras por precios', error);
    res.status(500).json({ message: 'Error al obtener figuras por precio' });
  }
};

const postFigura = async (req, res, next) => {
  try {
    const { nombre, imagen, descripcion, precio, tamaño, tipo } = req.body;

  if (!nombre || !descripcion || !imagen) {
    return res.status(400).json({ message: 'Los campos "nombre", "descripción" e "imagen" son obligatorios' });
  };

  const figura = new Figura({ nombre, imagen, descripcion, precio, tamaño, tipo });
  const newFigura = await figura.save();
  res.status(201).json(newFigura);

} catch (error) {
  console.error('Error al crear la figura', error);
  res.status(500).json({ message: 'Error al crear figura' });
};
};

const putFiguras = async (req, res, next) => {
  try {
    const { id } = req.params;
    const putParams = req.body;

    if (putParams.nombre === '' || putParams.descripcion === '' || putParams.imagen === '') {
      return res.status(400).json({ message: 'Los campos obligatorios no pueden estar vacíos' });
    }

    const putFigura = await Figura.findByIdAndUpdate(id, putParams, { new: true });
    res.status(200).json(putFigura);

  } catch (error) {
    console.error('Error al actualizar la figura', error);
    res.status(500).json({ message: 'Error al actualizar figura'});
  }
};

const deleteFiguras = async (req, res, next) => {
  try {
    const { id } = req.params;

    const deleteFigura = await Figura.findByIdAndDelete(id);
    res.status(200).json({ message: 'Figura eliminada correctamente', figura: deleteFigura });

  } catch (error) {
    console.error('Error al borrar la figura', error);
    res.status(500).json({ message: 'Error al eliminar figura' });
  }
};

module.exports = { getAllFiguras, getFiguraById, getFigurasByPrecio, postFigura, putFiguras, deleteFiguras };