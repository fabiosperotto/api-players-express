const jwt = require('jsonwebtoken');
const config = require('../../config.js');

class TokenValido {
  async check(request, response, next) {
    const cabecalhoAuth = request.headers['authorization'];

    //se nenhum cabecalho de autenticacao foi fornecido:
    if (!cabecalhoAuth) {
      return response.status(401).json({
        message: 'Sem autorizacao ou nao possui authorization nos headers da requisicao.',
      });
    }

    //se o cabecalho de autenticacao bearer nao foi fornecido:
    if (!cabecalhoAuth.startsWith('Bearer')) {
      return response.status(401).json({
        message: 'mecanismo de autenticacao invalido, configure Bearer Token.',
      });
    }

    const token = cabecalhoAuth.split(' ')[1];
    //se o cabecalho de autenticacao foi fornecido mas o token nao foi:
    if (!token) {
      return response.status(401).json({
        message: 'Bearer token nao fornecido.',
      });
    }

    //verifica token JWT
    jwt.verify(token, config.jwt.secret, (erro, clientedata) => {
      if (erro) {
        return response.status(403).json({
          message: 'token esta invalido, realize o login novamente.',
        });
      }
      // request.client = clientedata; //caso queira salvar os dados do cliente
      next();
    });
  }
}
module.exports = new TokenValido();
