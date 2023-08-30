module.exports = {
  type: 'object',
  properties: {
    email: { type: 'string' },
    senha: { type: 'string' },
  },
  required: ['email', 'senha'],
  additionalProperties: false,
};
