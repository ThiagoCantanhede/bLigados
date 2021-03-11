const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: String,
  email: String,
  telefone: String,
  usuarioId: String,
});

const ContatosModel = mongoose.model('contatos', schema);

module.exports = ContatosModel;
