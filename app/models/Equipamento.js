module.exports = (sequelize, DataTypes) => {
  const Equipamento = sequelize.define('equipamento', {
    descricao: {
      type: DataTypes.STRING(80),
      allowNull: false,
    },
    bonus_ataque: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    bonus_defesa: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
  return Equipamento;
};
