const models = require('../models');
const Cliente = models.cliente;
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schemas/cliente/novoCliente.js');
const validacao = ajv.compile(schema);
const helper = require('../commons/helper.js');
const schemaLogin = require('../schemas/cliente/login.js');
const validacaoLogin = ajv.compile(schemaLogin);

exports.create = (request, response) => {
  let validacoes = validacao(request.body);
  if (validacoes == false) {
    return response.status(400).send({
      message: validacao.errors[0].message,
    });
  }

  const cliente = {
    nome: request.body.nome ? request.body.nome : null,
    email: request.body.email,
    senha: helper.hashSenha(request.body.senha),
  };

  Cliente.create(cliente)
    .then((data) => {
      data.setDataValue('senha', '');
      data.setDataValue(
        'token',
        helper.gerarTokenAcesso(cliente.nome, cliente.id)
      );
      return response.status(201).json(data);
    })
    .catch((erro) => {
      return response.status(500).send({
        message: erro.message,
      });
    });
};

exports.login = (request, response) => {
  let validacoes = validacaoLogin(request.body);
  if (validacoes == false) {
    return response.status(400).send({
      message: validacaoLogin.errors[0].message,
    });
    return;
  }

  let cliente = request.body;
  cliente.senha = helper.hashSenha(cliente.senha);

  Cliente.findOne({ where: cliente })
    .then((data) => {
      if (!data) {
        return response.status(404).json({
          message: 'Cliente ou senha nao foram encontrados',
        });
      }
      return response.status(200).json({
        token: helper.gerarTokenAcesso(data.nome, data.id),
      });
    })
    .catch((erro) => {
      return response.status(500).send({
        message: erro.message,
      });
    });
};
