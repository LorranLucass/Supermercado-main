const mongoose = require('mongoose');

const ItemVendaSchema = new mongoose.Schema({
  vendaId: { type: mongoose.Schema.Types.ObjectId, ref: 'Venda', required: true },
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  quantidade: { type: Number, required: true, min: 1 },
  subtotal: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('ItemVenda', ItemVendaSchema);
