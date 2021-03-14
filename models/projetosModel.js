const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: String,
  descricao: String,
  link: String,
  usuarioId: String,
});

const ProjetosModel = mongoose.model('projetos', schema);

module.exports = ProjetosModel;
