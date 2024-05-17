const express = require('express');
var router = express.Router();
const jogadorController = require('../controllers/JogadorController.js');
const authMiddleware = require('../middlewares/isAutenticado.js');

//retorna todos os jogadores
router.get('/jogador', [authMiddleware.check], jogadorController.findAll);

//recupera um jogador pelo seu id
router.get('/jogador/:id', [authMiddleware.check], jogadorController.findOne);

//cria um novo jogador
router.post('/jogador', [authMiddleware.check], jogadorController.create);

//atualiza um jogador pelo seu id
router.put('/jogador/:id', [authMiddleware.check], jogadorController.update);

//exclui um jogador pelo seu id
router.delete('/jogador/:id', [authMiddleware.check], jogadorController.delete);

module.exports = router;
