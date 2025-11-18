const mongoose = require('mongoose');

const VendaSchema = new mongoose.Schema({
  clienteId: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: false },
  funcionarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'Funcionario', required: true },
  data: { type: Date, default: Date.now },
  total: { type: Number, required: true, min: 0 },
  status: { type: String, enum: ['open','closed','cancelled'], default: 'closed' }
}, { timestamps: true });

module.exports = mongoose.model('Venda', VendaSchema);
