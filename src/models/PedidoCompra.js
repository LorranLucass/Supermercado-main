const mongoose = require('mongoose');

const PedidoCompraSchema = new mongoose.Schema({
  fornecedorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Fornecedor', required: true },
  data: { type: Date, default: Date.now },
  valorTotal: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['requested','received','cancelled'], default: 'requested' }
}, { timestamps: true });

module.exports = mongoose.model('PedidoCompra', PedidoCompraSchema);
