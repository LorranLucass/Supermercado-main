const yup = require('yup');

const createCategoriaSchema = yup.object({
  nome: yup.string().required().min(2).max(100),
  descricao: yup.string().nullable()
});

module.exports = { createCategoriaSchema };
