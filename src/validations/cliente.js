const yup = require('yup');

const createClienteSchema = yup.object({
  nome: yup.string().required().min(2),
  cpf: yup.string().required().min(11).max(14),
  telefone: yup.string().nullable(),
  email: yup.string().email().nullable()
});

module.exports = { createClienteSchema };
