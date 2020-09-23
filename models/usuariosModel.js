const mongoose = require('mongoose');

let schema = mongoose.Schema({
  nome: String,
  nomeDeUsuario: String,
  password: String,
  tipo: String,
  // anoCadastro: Number,
  // mesCadastro: Number,
  // diaCadastro: Number,
});

const UsuariosModel = mongoose.model('usuarios', schema);

module.exports = UsuariosModel;
