const { Model, DataTypes } = require('sequelize');
const db = require('./conexao.js');

class Equipamento extends Model {

}

Equipamento.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        descricao: {
            type: DataTypes.STRING(80),
            allowNull: true
        },

        bonus_ataque: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        bonus_defesa: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        id_jogador: {
            type: DataTypes.INTEGER,
            allowNull: true
        }
    },
    {
        sequelize: db,
        modelName: 'Equipamento',
        tableName: 'equipamento'
    }
);

module.exports = Equipamento;

