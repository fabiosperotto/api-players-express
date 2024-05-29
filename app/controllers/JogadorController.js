//validacao de schema
const Ajv = require('ajv');
const ajv = new Ajv();
const schema = require('../schemas/jogador/novoJogador.js');
const validacao = ajv.compile(schema);
//models
const models = require('../models');
const Jogador = models.jogador.Jogador;

class JogadorController {
  findAll(request, response) {
    const equipamentoModel = models.equipamento.EquipamentoModel;
    Jogador.findAll(equipamentoModel)
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
  }

  find(request, response) {
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
        return response.status(500).json({
          message: erro.message,
        });
      });
  }

  create(request, response) {
    let validacoes = validacao(request.body);
    if (!validacoes) {
      let mensagem = validacao.errors[0].instancePath.replace('/', '');
      mensagem += ' ' + validacao.errors[0].message;
      return response.status(400).json({
        message: mensagem,
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
  }

  update(request, response) {
    const id = request.params.id;

    Jogador.findByPk(id)
      .then((buscaJogador) => {
        if (buscaJogador === null) {
          return response.status(404).json({
            message: 'jogador nao encontrado',
          });
        } else {
          Jogador.update(request.body, id).then((atualizado) => {
            if (atualizado) {
              Jogador.findByPk(id).then((jogadorAtualizado) => {
                return response.status(200).json(jogadorAtualizado);
              });
            } else {
              return response.status(500).json({
                message: 'ocorreu algum problema no servidor',
              });
            }
          });
        }
      })
      .catch((erro) => {
        return response.status(500).json({
          message: erro.message,
        });
      });
  }

  delete(request, response) {
    const id = request.params.id;
    Jogador.delete(id)
      .then((removido) => {
        if (removido) {
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
  }
}
module.exports = new JogadorController();
