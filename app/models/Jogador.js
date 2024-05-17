const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Jogador {
  #nome;
  #ataque;
  #defesa;
  #pontos_vida;

  // constructor(nome, ataque, defesa, pontos_vida = null ) {
  constructor() {}

  get nome() {
    return this.#nome;
  }
  set nome(nome) {
    this.#nome = nome;
  }

  get ataque() {
    return this.#ataque;
  }
  set ataque(ataque) {
    this.#ataque = ataque;
  }

  get defesa() {
    return this.#defesa;
  }
  set defesa(defesa) {
    this.#defesa = defesa;
  }

  get pontos_vida() {
    return this.#pontos_vida;
  }
  set pontos_vida(hp) {
    this.#pontos_vida = hp;
  }

  static async findByPk(id) {
    try {
      const resultado = await JogadorModel.findByPk(id);
      if (resultado) {
        return resultado;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async findAll(equipamento) {
    try {
      const resultados = await JogadorModel.findAll({ include: equipamento }); //{where ...}
      if (resultados) {
        return resultados;
      } else {
        return null;
      }
    } catch (error) {
      throw error;
    }
  }

  static async create(novoJogador) {
    try {
      const jogador = await JogadorModel.create({
        nome: novoJogador.nome,
        ataque: novoJogador.ataque,
        defesa: novoJogador.defesa,
        pontos_vida: novoJogador.pontos_vida,
      });
      return jogador;
    } catch (error) {
      throw error;
    }
  }

  static async update(dados, idjogador) {
    try {
      const resultado = await JogadorModel.update(dados, { where: { id: idjogador } });

      console.log('update model', resultado);
      if (resultado) {
        return resultado;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const data = await JogadorModel.findByPk(id);
      if (data) {
        data.destroy();
        return true;
      } else {
        return false;
      }
    } catch (error) {
      throw error;
    }
  }
}

const JogadorModel = db.define('jogador', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  nome: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  ataque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  defesa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  pontos_vida: {
    type: Sequelize.INTEGER,
    allowNull: true,
    defaultValue: 100,
  },
});

module.exports = { Jogador, JogadorModel };
