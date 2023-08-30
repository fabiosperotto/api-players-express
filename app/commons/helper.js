const config = require('../../config.js');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

exports.hashSenha = (senha) => {
  const hash = crypto.createHash('sha256'); //instancia de Hash
  hash.update(senha); //atualiza o conteudo dele com a senha para processar
  return hash.digest('hex'); //digest = resumo, valor do hash em hexadecimal
};

exports.gerarTokenAcesso = (nome, id) => {
  return jwt.sign({ nome, id }, config.jwt.secret, {
    expiresIn: config.jwt.expiration,
  });
};
