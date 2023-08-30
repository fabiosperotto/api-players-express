module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('cliente', {
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
    },
  });

  return Cliente;
};
