//foi optado em implementar os relacionamentos em arquivo separado
//porem cada relacionamento pode ser implementado dentro de sua model separadamente
module.exports = function (models) {
  //este relacionamento poderia estar em app/models/Jogador:
  models.jogador.hasMany(models.equipamento, {
    foreignKey: 'id_jogador', //nome da FK
    onDelete: 'SET NULL', //configuracao da FK
  });
  //este relacionamento poderia estar em app/models/Equipamento:
  models.equipamento.belongsTo(models.jogador, {
    foreignKey: 'id_jogador',
    onDelete: 'SET NULL',
  });
};
