const mongoose = require('mongoose');

let schema = mongoose.Schema({
  usuarioId: String,
  tipoAcao: String,
  mesAcao: String,
  anoAcao: String,
});

const AuditoriaModel = mongoose.model('auditoria', schema);

module.exports = AuditoriaModel;
