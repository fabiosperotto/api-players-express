module.exports = {
  type: 'object',
  properties: {
    nome: { type: 'string' },
    ataque: { type: 'integer', maximum: 100 },
    defesa: { type: 'integer', maximum: 100 },
    pontos_vida: { type: 'integer', maximum: 100 },
  },
  required: ['nome', 'ataque', 'defesa'],
  additionalProperties: false,
};
