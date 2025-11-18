const mongoose = require('mongoose');

const FornecedorSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  cnpj: { type: String, required: true, unique: true },
  telefone: { type: String, default: '' },
  email: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Fornecedor', FornecedorSchema);
