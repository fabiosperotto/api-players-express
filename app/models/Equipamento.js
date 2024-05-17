const Sequelize = require('sequelize');
const db = require('./conexao.js');

class Equipamento {
  #descricao;
  #bonus_ataque;
  #bonus_defesa;

  construct() {}

  get descricao() {
    return this.#descricao;
  }
  set descricao(descricao) {
    this.#descricao = descricao;
  }

  get bonus_ataque() {
    return this.#bonus_ataque;
  }
  set bonus_ataque(bonus) {
    this.#bonus_ataque = bonus;
  }

  get bonus_defesa() {
    return this.#bonus_defesa;
  }
  set bonus_defesa(bonus) {
    this.#bonus_defesa = bonus;
  }
}

const EquipamentoModel = db.define('equipamento', {
  descricao: {
    type: Sequelize.STRING(80),
    allowNull: false,
  },
  bonus_ataque: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  bonus_defesa: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = { Equipamento, EquipamentoModel };
