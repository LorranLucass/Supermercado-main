const mongoose = require('mongoose');

const EstoqueMovimentacaoSchema = new mongoose.Schema({
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  tipo: { type: String, enum: ['entrada','saida','ajuste'], required: true },
  quantidade: { type: Number, required: true },
  data: { type: Date, default: Date.now },
  referencia: { type: String, default: '' } // ex: "pedidoCompra:ID" ou "ajuste_manual"
}, { timestamps: true });

module.exports = mongoose.model('EstoqueMovimentacao', EstoqueMovimentacaoSchema);
