const mongoose = require('mongoose');

let schema = mongoose.Schema({
  titulo: String,
  codigo: String,
  competencias: String,
  descricao: String,
  rendimentos: String,
  beneficios: String,
  dataLimiteCandidatura: String,
  dataPublicacao: String,
  usuarioId: String,
});

const VagasModel = mongoose.model('vagas', schema);

module.exports = VagasModel;
