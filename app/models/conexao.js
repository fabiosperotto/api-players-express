const config = require('../../config.js');
const dbconfig = config.dbconfig;
const Sequelize = require('sequelize');

const conexao = new Sequelize(dbconfig.database, dbconfig.user, dbconfig.passwd, {
  host: dbconfig.host,
  dialect: dbconfig.dialect,
  pool: {
    max: dbconfig.pool.max,
    min: dbconfig.pool.min,
    acquire: dbconfig.pool.acquire,
    idle: dbconfig.pool.idle,
  },
  define: {
    underscored: dbconfig.define.underscored,
    freezeTableName: dbconfig.define.freezeTableName,
    timestamps: dbconfig.define,
    paranoid: dbconfig.define.paranoid,
  },
  dialectOptions: {
    dateStrings: false, //desabilita o uso de datetime e timestamp como objetos Date do JS
    typeCast: function (field, next) {
      // lendo do BD
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
  timezone: '-03:00',
});

//testando conexao
try {
  conexao.authenticate();
  console.log('Conexao com o BD realizada com sucesso.');
} catch (error) {
  console.error('Nao foi possivel se conectar com o BD:', error);
}

module.exports = conexao;
