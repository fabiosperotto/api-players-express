require('dotenv').config();
const express = require('express');
const config = require('./config.js');
const cors = require('cors');
const app = express();
//PRE-CONFIGURACAO
app.use(express.json()); //parser dados de requisicoes em JSON
app.use(
  cors({
    origin: '*',
  })
);

//BANCO DE DADOS
const models = require('./app/models'); //inicializa a config com sequelize

//testando conexao
// try {
//   models.sequelize.authenticate();
//   console.log('Conexao realizada com sucesso ao BD.');
// } catch (error) {
//   console.error('Nao foi possivel se conectar com o BD:', error);
// }

//conectando e sincronizando com BD
models.sequelize
  .sync({}) //{ force: true } --> para forcar a recriacao do banco
  .then(() => {
    console.log('sincronizacao com bd...');
  })
  .catch((err) => {
    console.log('falha ao sincronizar: ' + err.message);
  });

//ROTAS
app.get('/', (request, response) => {
  response.json({
    //documento JSON
    message: 'Game API',
    version: '1.0',
  });
});
const jogadorRotas = require('./app/routes/jogador.routes.js');
const clienteRotas = require('./app/routes/cliente.routes.js');
app.use(jogadorRotas);
app.use(clienteRotas);

//RODANDO SERVER
app.listen(config.port, () => {
  console.log('servidor on-line');
});
