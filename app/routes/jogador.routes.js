const express = require('express');
var router = express.Router();
const jogadores = require('../controllers/JogadorController.js');
const authMiddleware = require('../middlewares/isAutenticado.js');

//retorna todos os jogadores
router.get('/jogador', [authMiddleware.check], jogadores.findAll);

//recupera um jogador pelo seu id
router.get('/jogador/:id', [authMiddleware.check], jogadores.findOne);

//cria um novo jogador
router.post('/jogador', [authMiddleware.check], jogadores.create);

//atualiza um jogador pelo seu id
router.put('/jogador/:id', [authMiddleware.check], jogadores.update);

//exclui um jogador pelo seu id
router.delete('/jogador/:id', [authMiddleware.check], jogadores.delete);

module.exports = router;
