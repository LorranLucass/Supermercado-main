const yup = require('yup');

const createFuncionarioSchema = yup.object({
  nome: yup.string().required().min(2),
  cpf: yup.string().required().min(11).max(14),
  cargo: yup.string().required(),
  salario: yup.number().required().min(0)
});

module.exports = { createFuncionarioSchema };
