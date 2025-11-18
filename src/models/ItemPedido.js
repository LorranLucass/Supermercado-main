const mongoose = require('mongoose');

const ItemPedidoSchema = new mongoose.Schema({
  pedidoId: { type: mongoose.Schema.Types.ObjectId, ref: 'PedidoCompra', required: true },
  produtoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Produto', required: true },
  quantidade: { type: Number, required: true, min: 1 },
  valorUnitario: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('ItemPedido', ItemPedidoSchema);

