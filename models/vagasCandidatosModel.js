const mongoose = require('mongoose');

let schema = mongoose.Schema({
  vagaId: String,
  usuarioId: String,
});

const VagasCandidatosModel = mongoose.model('vagascandidatos', schema);

module.exports = VagasCandidatosModel;
