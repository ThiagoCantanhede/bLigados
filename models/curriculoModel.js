const mongoose = require('mongoose');

let schema = mongoose.Schema({
  formacao: String,
  competencias: String,
  emperienciaProfissional: String,
  usuarioId: String,
});

const CurriculoModel = mongoose.model('curriculo', schema);

module.exports = CurriculoModel;
