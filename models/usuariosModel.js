const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: String,
  nomeDeUsuario: String,
  password: String,
  tipo: String,
  email: String,
  dataNascimento: String,
  dataCadastro: String,
});

const UsuariosModel = mongoose.model('usuarios', schema);

module.exports = UsuariosModel;
