const { Model, DataTypes } = require('sequelize');
const db = require('./conexao.js');

class Jogador extends Model {
    // constructor(nome, ataque, defesa, hp){

    // }
    // constructor() {
    //     super();
    // }

    //sequencia de getters e setters

    static async findAllComEquipamentos() {
        return this.findAll({
            include: {
                association: 'equipamentos',
                required: false
            }
        });
    }


}

Jogador.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING(80),
            allowNull: false
        },

        ataque: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        defesa: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        pontos_vida: {
            type: DataTypes.INTEGER,
            allowNull: true,
            defaultValue: 100
        }
    },
    {
        sequelize: db,
        modelName: 'Jogador',
        tableName: 'jogador'
    }
);

module.exports = Jogador;
