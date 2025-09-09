const mongoose = require('mongoose');

const figuraSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  imagen: { type: String, required: true },
  descripcion: { type: String, required: true },
  precio: { type: Number },
  tamaño: { type: String },
  tipo: { type: String },
},
  { timestamps: true,
    collection: "figuras"
   });

const Figura = mongoose.model('Figura', figuraSchema);

module.exports = Figura;