const models = require('../models');
const Cliente = models.cliente.Cliente;
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
      data.setDataValue('token', helper.gerarTokenAcesso(cliente.nome, cliente.id));
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
  }

  let dados = request.body;
  dados.senha = helper.hashSenha(dados.senha);

  Cliente.findOne(dados)
    .then((registro) => {
      if (!registro) {
        return response.status(404).json({
          message: 'Cliente ou senha nao foram encontrados',
        });
      }
      return response.status(200).json({
        token: helper.gerarTokenAcesso(registro.nome, registro.id),
      });
    })
    .catch((erro) => {
      return response.status(500).send({
        message: erro.message,
      });
    });
};
