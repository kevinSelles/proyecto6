const express = require('express');
const router = express.Router();
const { getAllFiguras, getFiguraById, getFigurasByPrecio, postFigura, putFiguras, deleteFiguras } = require('../controllers/figuras');

router.get('/precio/:maxPrecio', getFigurasByPrecio);
router.get('/:id', getFiguraById);
router.get('/', getAllFiguras);
router.post('/', postFigura);
router.put('/:id', putFiguras);
router.delete('/:id', deleteFiguras);

module.exports = router;