const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => mongoose.Types.ObjectId.isValid(val);

const createItemVendaSchema = yup.object({
  vendaId: yup.string().required().test('is-objectid','Venda inválida', isObjectId),
  produtoId: yup.string().required().test('is-objectid','Produto inválido', isObjectId),
  quantidade: yup.number().required().min(1),
  subtotal: yup.number().required().min(0)
});

module.exports = { createItemVendaSchema };
