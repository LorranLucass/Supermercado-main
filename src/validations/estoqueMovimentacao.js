const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => !val || mongoose.Types.ObjectId.isValid(val);

const createEstoqueSchema = yup.object({
  produtoId: yup.string().required().test('is-objectid','Produto inválido', isObjectId),
  tipo: yup.string().oneOf(['entrada','saida','ajuste']).required(),
  quantidade: yup.number().required().min(1),
  data: yup.date().nullable(),
  referencia: yup.string().nullable()
});

module.exports = { createEstoqueSchema };
