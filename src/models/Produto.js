const mongoose = require('mongoose');

const ProdutoSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  preco: { type: Number, required: true, min: 0 },
  categoriaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true },
  estoque: { type: Number, required: true, min: 0, default: 0 },
  codigoBarras: { type: String, default: '' },
  ativo: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('Produto', ProdutoSchema);
