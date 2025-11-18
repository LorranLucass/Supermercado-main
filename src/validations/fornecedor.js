const yup = require('yup');

const createFornecedorSchema = yup.object({
  nome: yup.string().required().min(2),
  cnpj: yup.string().required().min(11).max(18),
  telefone: yup.string().nullable(),
  email: yup.string().email().nullable()
});

module.exports = { createFornecedorSchema };
