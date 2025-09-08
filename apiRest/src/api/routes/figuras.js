const express = require('express');
const router = express.Router();
const { getAllFiguras, getFiguraById, getFigurasByPrecio, postFigura, putFiguras, deleteFiguras } = require('../controllers/figuras');

router.get('/figuras/precio/:maxPrecio', getFigurasByPrecio);
router.get('/figuras/:id', getFiguraById);
router.get('/figuras', getAllFiguras);
router.post('/figuras', postFigura);
router.put('/figuras/:id', putFiguras);
router.delete('/figuras/:id', deleteFiguras);

module.exports = router;