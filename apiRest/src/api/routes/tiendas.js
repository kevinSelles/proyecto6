const express = require('express');
const router = express.Router();
const Tienda = require('../models/tiendas');
const { getTiendas, getTiendaById, postTienda, putTienda, deleteTienda } = require('../controllers/tiendas');

router.get('/tiendas', getTiendas);
router.get('/tiendas/:id', getTiendaById);
router.post('/tiendas', postTienda);
router.put('/tiendas/:id', putTienda);
router.delete('/tiendas/:id', deleteTienda);

router.put('/tiendas/:id/agregar-figuras', async (req, res) => {
  try {
    const { id } = req.params;
    const { figuras } = req.body;

    const tienda = await Tienda.findById(id);

    figuras.forEach(idFigura => {
      if (!tienda.figuras.includes(idFigura)) {
        tienda.figuras.push(idFigura);
      }
    });

    await tienda.save();
    await tienda.populate('figuras');
    res.status(200).json(tienda);
  } catch (error) {
    res.status(500).json({ message: 'Error agregando figuras' });
  }
});

module.exports = router;