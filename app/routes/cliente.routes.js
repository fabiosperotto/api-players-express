const express = require('express');
var router = express.Router();
const clienteController = require('../controllers/ClienteController.js');

router.post('/cliente', clienteController.create);
router.post('/cliente/login', clienteController.login);

module.exports = router;
