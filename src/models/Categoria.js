const mongoose = require('mongoose');

const CategoriaSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  descricao: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Categoria', CategoriaSchema);
