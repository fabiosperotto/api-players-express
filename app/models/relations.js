module.exports = function (models) {

    models.Jogador.hasMany(models.Equipamento, {
        foreignKey: 'id_jogador',
        sourceKey: 'id',
        as: 'equipamentos'
    });

    models.Equipamento.belongsTo(models.Jogador, {
        foreignKey: 'id_jogador',
        targetKey: 'id',
        as: 'jogador',
        onDelete: 'SET NULL',
    });

};
