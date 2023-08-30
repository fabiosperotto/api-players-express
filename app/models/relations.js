module.exports = function (models) {
  models.jogador.hasMany(models.equipamento, {
    foreignKey: 'id_jogador', //nome da FK
    onDelete: 'SET NULL', //configuracao da FK
  });
  models.equipamento.belongsTo(models.jogador, {
    foreignKey: 'id_jogador',
    onDelete: 'SET NULL',
  });
};
