## BackEnd_ProjGerenciador

Esta é uma aplicação API construída com Express que se conecta a um banco de dados utilizando Sequelize. A aplicação possui CRUDs para produtos e usuários, além de funcionalidades de login, autenticação e cadastro com JWT.

## Sumário

- [Instalação](#instalação)
- [Configuração](#configuração)
- [Uso](#uso)
- [Endpoints](#endpoints)
  - [Usuários](#usuários)
  - [Produtos](#produtos)
- [Autenticação](#autenticação)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)

## Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/Geronilton/BackEnd_ProjGerenciador.git
   cd BackEnd_ProjGerenciador

2. Instale as dependências:
    npm install

## Configuração

1. Configure o Sequelize para se conectar ao seu banco de dados. Edite o arquivo config/config.json.

## Uso

1. Inicie a aplicação:
    npm start

2. A API estará disponível em http://localhost:3001, de acordo com a porta indicada no arquivo index.

## Endpoints
1. Usuários

    - Login

    URL: /session
   
    Método: POST
   
    Corpo da Requisição:
   
        {
        "email": "email@exemplo.com",
        "password": "senha123"
        }


    - Registrar Usuário

    URL: /register
   
    Método: POST
   
    Corpo da Requisição:
   
        {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "password": "senha123"
        }


    - Atualizar Usuário

    URL: /update-user/:id
   
    Método: PUT
   
    Corpo da Requisição:
   
        {
        "name": "Novo Nome",
        "email": "novoemail@exemplo.com"
        }


    - Listar Usuários

    URL: /list-users
   
    Método: GET


    - Deletar Usuário

    URL: /delete-user/:id
   
    Método: DELETE


3. Produtos

    - Criar Produto

    URL: /create-produto

    Método: POST
   
    Corpo da Requisição:
   
        {
        "name": "Nome do Produto",
        "description": "Descrição do Produto",
        "price": 100.00
        }


    - Listar Produtos

    URL: /list-produto
   
    Método: GET


    - Atualizar Produto

    URL: /update-produto/:id
   
    Método: PUT
   
    Corpo da Requisição:
   
        {
        "name": "Novo Nome",
        "description": "Nova Descrição",
        "price": 150.00
        }


    - Deletar Produto

    URL: /delete-produto/:id
   
    Método: DELETE


    - Obter Produto por ID

    URL: /get-produto/:id
   
    Método: GET


    - Buscar Produto

    URL: /search
   
    Método: GET


    - Registrar Entrada no Estoque

    URL: /entrada-estoque/:id
   
    Método: PUT
   
    Corpo da Requisição:
   
        {
        "quantity": 10
        }


    - Registrar Retirada no Estoque

    URL: /retirada-estoque/:id
   
    Método: PUT
   
    Corpo da Requisição:
   
        {
        "quantity": 5
        }


5. Servidor

- Status do Servidor
  
    URL: /
  
    Método: GET
  
    Resposta: "Servidor funcionando !!"

## Autenticação

Para acessar os endpoints protegidos, adicione o token JWT ao header Authorization(tem que realizar login com usuario cadastrado):

Authorization: Bearer seu_jwt_token

## Tecnologias Utilizadas

    Node.js
    Express
    Sequelize
    JWT
