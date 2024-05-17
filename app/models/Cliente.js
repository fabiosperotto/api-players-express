const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Cliente {
  #nome;
  #email;
  #senha;

  construct() {}

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }

  get email() {
    return this.#email;
  }
  set email(email) {
    this.#email = email;
  }

  get senha() {
    return this.#senha;
  }
  set senha(senha) {
    this.#senha = senha;
  }

  static async create(novoCliente) {
    try {
      const cliente = await ClienteModel.create({
        nome: novoCliente.nome,
        email: novoCliente.email,
        senha: novoCliente.senha,
      });
      return cliente;
    } catch (error) {
      throw error;
    }
  }

  static async findOne(dados) {
    try {
      const resultado = await ClienteModel.findOne({ where: dados });
      if (resultado) {
        return resultado;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }
}
const ClienteModel = db.define('cliente', {
  nome: {
    type: Sequelize.STRING(200),
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  senha: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
});
module.exports = { Cliente, ClienteModel };
