const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  usuarioId: String,
});

const ProjetosModel = mongoose.model('projetos', schema);

module.exports = ProjetosModel;
