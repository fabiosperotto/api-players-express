module.exports = (sequelize, DataTypes) => {
  const Jogador = sequelize.define('jogador', {
    nome: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    defesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pontos_vida: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 100,
    },
  });

  return Jogador;
};
