const express = require('express');
const router = express.Router();
const Tienda = require('../models/tiendas');
const { getTiendas, getTiendaById, postTienda, putTienda, deleteTienda } = require('../controllers/tiendas');

router.get('/', getTiendas);
router.get('/:id', getTiendaById);
router.post('/', postTienda);
router.put('/:id', putTienda);
router.delete('/:id', deleteTienda);

module.exports = router;