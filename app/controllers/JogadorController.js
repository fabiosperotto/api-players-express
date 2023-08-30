//validacao de schema
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schemas/jogador/novoJogador.js');
const validacao = ajv.compile(schema);
//models
const models = require('../models');
const Jogador = models.jogador;
const Equipamento = models.equipamento;

exports.findAll = (request, response) => {
  Jogador.findAll({ include: Equipamento }) // {where: ...}
    .then((data) => {
      response.status(200).json(data);
    })
    .catch((erro) => {
      response.status(500).json({
        message: erro.message,
      });
    });
};

exports.findOne = (request, response) => {
  const id = request.params.id;
  Jogador.findByPk(id)
    .then((data) => {
      if (data) {
        return response.status(200).json(data);
      } else {
        return response.status(404).json({
          message: 'jogador nao encontrado',
        });
      }
    })
    .catch((erro) => {
      response.status(500).json({
        message: erro.message,
      });
    });
};

exports.create = (request, response) => {
  let validacoes = validacao(request.body);
  if (!validacoes) {
    return response.status(400).json({
      message: validacao.errors[0].message,
    });
  }
  Jogador.create(request.body)
    .then((data) => {
      return response.status(201).json(data);
    })
    .catch((erro) => {
      return response.status(500).json({
        message: 'erro no servidor: ' + erro.message,
      });
    });
};

exports.update = (request, response) => {
  const id = request.params.id;
  Jogador.findByPk(id)
    .then((data) => {
      if (data) {
        Jogador.update(request.body, { where: { id: id } }).then((result) => {
          if (result) {
            return response.status(200).json(data);
          }
        });
      } else {
        return response.status(404).json({
          message: 'jogador nao encontrado',
        });
      }
    })
    .catch((erro) => {
      response.status(500).json({
        message: erro.message,
      });
    });
};

exports.delete = (request, response) => {
  const id = request.params.id;
  Jogador.findByPk(id)
    .then((data) => {
      if (data) {
        data.destroy();
        return response.status(200).json({
          message: 'jogador excluido com sucesso',
        });
      } else {
        return response.status(404).json({
          message: 'jogador nao encontrado',
        });
      }
    })
    .catch((erro) => {
      response.status(500).json({
        message: erro.message,
      });
    });
};
