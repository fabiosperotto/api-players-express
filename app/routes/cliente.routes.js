const express = require('express');
var router = express.Router();
const clientes = require('../controllers/ClienteController.js');

router.post('/cliente', clientes.create);
router.post('/cliente/login', clientes.login);

module.exports = router;
