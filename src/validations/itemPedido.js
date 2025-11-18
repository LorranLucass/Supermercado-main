const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => mongoose.Types.ObjectId.isValid(val);

const createItemPedidoSchema = yup.object({
  pedidoId: yup.string().required().test('is-objectid','Pedido inválido', isObjectId),
  produtoId: yup.string().required().test('is-objectid','Produto inválido', isObjectId),
  quantidade: yup.number().required().min(1),
  valorUnitario: yup.number().required().min(0)
});

module.exports = { createItemPedidoSchema };
