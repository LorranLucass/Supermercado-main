const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => !val || mongoose.Types.ObjectId.isValid(val);

const createPedidoCompraSchema = yup.object({
  fornecedorId: yup.string().required().test('is-objectid','Fornecedor inválido', isObjectId),
  data: yup.date().nullable(),
  valorTotal: yup.number().required().min(0),
  status: yup.string().oneOf(['requested','received','cancelled']).nullable()
});

module.exports = { createPedidoCompraSchema };
