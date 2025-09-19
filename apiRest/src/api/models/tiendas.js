const mongoose = require('mongoose');

const tiendaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  direccion: { type: String },
  figuras: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Figura' }],
  abierta: { type: Boolean, default: true }
}, 
{ timestamps: true,
  collection: "tiendas"
 });

const Tienda = mongoose.model('Tienda', tiendaSchema);

module.exports = Tienda;