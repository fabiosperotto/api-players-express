const { Model, DataTypes } = require('sequelize');
const db = require('./conexao.js');

class Cliente extends Model {
    //#nome;
    //#email;
    //#senha;

    //constructor() { 
    //    super();
    //}


    
    static async findOne(dados) {
        return super.findOne({
            where: dados
        });
    }
}


Cliente.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },

        nome: {
            type: DataTypes.STRING(200),
            allowNull: true,
        },
        email: {
            type: DataTypes.STRING(80),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(64),
            allowNull: false,
        }
    },
    {
        sequelize: db,
        modelName: 'Cliente',
        tableName: 'cliente'
    }
);

module.exports = Cliente;
