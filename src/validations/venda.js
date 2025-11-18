const yup = require('yup');
const mongoose = require('mongoose');
const isObjectId = (val) => !val || mongoose.Types.ObjectId.isValid(val);

const createVendaSchema = yup.object({
  clienteId: yup.string().nullable().test('is-objectid','Cliente inválido', isObjectId),
  funcionarioId: yup.string().required().test('is-objectid','Funcionario inválido', isObjectId),
  data: yup.date().nullable(),
  total: yup.number().required().min(0),
  status: yup.string().oneOf(['open','closed','cancelled']).nullable()
});

module.exports = { createVendaSchema };
