const mongoose = require('mongoose');

const FuncionarioSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  cpf: { type: String, required: true, unique: true },
  cargo: { type: String, required: true },
  salario: { type: Number, required: true, min: 0 }
}, { timestamps: true });

module.exports = mongoose.model('Funcionario', FuncionarioSchema);
