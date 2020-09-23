const express = require('express');
const usuariosService = require('../services/usuariosService.js');
const usuariosRouter = express.Router();

usuariosRouter.put('/', usuariosService.update);
usuariosRouter.post('/', usuariosService.create);
usuariosRouter.get('/', usuariosService.findAll);
usuariosRouter.get('/:id', usuariosService.findOne);
usuariosRouter.delete('/:id', usuariosService.remove);
usuariosRouter.delete('/', usuariosService.removeAll);

module.exports = usuariosRouter;
