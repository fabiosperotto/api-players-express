# Game-API - Pack de Aprendizado

Pacote de programação para disciplinas de desenvolvimento web back-end, utilizando Javascript com Nodejs + [Express](https://expressjs.com/). O Objetivo é servir de exemplo para a elaboração de uma API para comunicar dados em JSON a respeito de uma modelagem. É uma API RESTful com validações de schemas JSON ([Ajv](https://ajv.js.org/)) e para autenticação utiliza JWT Token ([jsownwebtoken](https://github.com/auth0/node-jsonwebtoken)). Na persistência de dados, se utiliza o ORM [Sequelize](https://sequelize.org/) com banco de dados em MySQL.

Este projeto faz parte de uma série de aprendizado em APIs. Nesta mesma série, você pode acessar o mesmo projeto implementado com [PHP e Lumen](https://github.com/fabiosperotto/pratica-api-rest).

## Compatibilidade

- Nodejs 18.16.x;
- npm 9.5.x;
- Express 4.18.2
- MySQL 8.0;
- Ajv 8.12.0;
- cors 2.8.5;
- jsonwebtoken 9.0.1;
- mysql2 3.6.0;
- sequelize 3.6.0.

### Docência

Se você é docente da área, pode entrar em contato para obter slides e dicas sobre o desenvolvimento de aulas com este projeto.

## Recursos

- Utilização do framework Express como base;
- Validação de documentos JSON com Ajv;
- ORM Sequelize para criação/alteração de banco de dados relacionais, incluindo relacionamento entre tabelas.
- Aplicações de configurações sobre [CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS) e [Bearer Tokens](https://oauth.net/2/bearer-tokens/);

## Modelagem de Referência

Este projeto faz referência a uma modelagem hipotética de um game, da relação entre um jogador e seus equipamentos.

![Imagem da Modelagem inicial do sistema](/modelagem/modelagem-img.png)

## Pré-requisitos:

1. Ambiente local de desenvolvimento:

- Se Windows: instalações [node e npm](https://treehouse.github.io/installation-guides/windows/node-windows.html) e [MySQL](https://dev.mysql.com/downloads/installer/);
- Se Linux: instalações [node e npm](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-22-04) e [MySQL](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-22-04);

2. Para acessar o banco de dados, caso não queira manipular o BD via linha de comando, pode utilizar um ou mais softwares clientes, como [MySQL Workbench](https://www.mysql.com/products/workbench/) ou [DBeaver](https://dbeaver.io/).

3. Para usuários Windows recomenda-se sempre utilizar o [Git Bash for Windows](https://gitforwindows.org/) a fim de executar comandos similares ao estilo linux das aulas. Pode usar o terminal do [Visual Studio Code](https://code.visualstudio.com/).

## Organização do Projeto

O projeto segue uma estrutura em MVC com arquivos individuais de rotas e validadores JSON:

- /app
  - /commons: helpers reutilizáveis pela aplicação;
  - /controllers: os Controllers da aplicação;
  - /middlewares: reúne todos os middlewares da aplicação;
  - /models: reúne as Models e o inicializador index para o ORM;
  - /routes: arquivos de rotas da aplicação;
  - /schemas: os esquemas JSON utilizados para validações na aplicação;
- modelagem: documentações sobre o banco de dados.
- app.js: componente de inicialização do projeto.
- config.js: reúne propriedades configuráveis globais da aplicação.

## Instalação e Configuração

1. Fazer o download/fork/cópia deste repositório.
2. Instalar via npm o projeto:

```console
dev@pc:~$ cp .env.example .env
dev@pc:~$ npm install
```

3. Verifique se o primeiro comando resultou na cópia correta do .env.example para .env. Em seguida preencha corretamente todas as variáveis de ambiente do arquivo .env.

4. Para executar o projeto, acesse o diretório da aplicação e execute um dos comandos abaixo:

```console
dev@pc:~$ npm run dev
#ou
dev@pc:~$ npx nodemon
```

## Documentações

[Express](https://expressjs.com/pt-br/)

[Sequelize ORM](https://sequelize.org/docs/v6/getting-started/)

## Dependências

[npm](https://www.npmjs.com/)

## Contribuindo com o projeto

Serão aceitas atualizações de pacotes, correções de bug e melhorias didáticas. Novas funcionalidades podem serem debatidas e adicionadas ao projeto se verificado necessidade do desenvolvimento de back-end de um jogo completo.
