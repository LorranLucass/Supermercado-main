const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => !val || mongoose.Types.ObjectId.isValid(val);

const createProdutoSchema = yup.object({
  nome: yup.string().required().min(1).max(200),
  preco: yup.number().required().min(0),
  categoriaId: yup.string().required().test('is-objectid','Categoria inválida', isObjectId),
  estoque: yup.number().required().min(0),
  codigoBarras: yup.string().nullable(),
  ativo: yup.boolean().nullable()
});

module.exports = { createProdutoSchema };
