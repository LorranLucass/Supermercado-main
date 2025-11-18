const mongoose = require('mongoose');

const ClienteSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  cpf: { type: String, required: true, unique: true },
  telefone: { type: String, default: '' },
  email: { type: String, default: '' }
}, { timestamps: true });

module.exports = mongoose.model('Cliente', ClienteSchema);
