Supermercado API

📋 Descrição do Projeto
O Supermercado API é uma API RESTful desenvolvida em Node.js com Express para gerenciar um sistema de supermercado. A API permite realizar operações CRUD (Create, Read, Update, Delete) nos recursos produtos, clientes, fornecedores, pedidos e categorias. O projeto foi construído para suportar o cadastro e gerenciamento de dados de um supermercado, com validações de entrada e armazenamento em memória (com possibilidade de persistência em arquivo JSON ou banco de dados).
Objetivos

Criar endpoints para gerenciar produtos, clientes, fornecedores, pedidos e categorias.
Implementar validações para evitar dados inválidos ou duplicados.
Testar a API usando Postman com uma coleção abrangente de requisições CRUD.
Garantir que a API seja fácil de usar e extensível.

👥 Participantes

Lorran Lucas,
Victor Henrique,
Lucas Lopes,
Igor Marques,

🛠️ Tecnologias Utilizadas

Node.js: Plataforma para execução do backend.
Express: Framework para criar a API RESTful.
Postman: Ferramenta para testar os endpoints.
JavaScript: Linguagem de programação utilizada.

📂 Estrutura do Projeto
Supermercado/
├── routes/
│   ├── produtos.js       # Endpoints para produtos
│   ├── clientes.js       # Endpoints para clientes
│   ├── fornecedores.js   # Endpoints para fornecedores
│   ├── pedidos.js        # Endpoints para pedidos
│   ├── categorias.js     # Endpoints para categorias
├── app.js                # Arquivo principal do servidor
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto

🚀 Funcionalidades
A API suporta as seguintes funcionalidades para cada recurso:
Produtos

POST /produtos: Cadastra um produto (nome, preco, estoque, categoria).
GET /produtos: Lista todos os produtos.
GET /produtos/:id: Busca um produto por ID.
PUT /produtos/:id: Atualiza um produto.
DELETE /produtos/:id: Remove um produto.

Validações:

Campos obrigatórios: nome, preco, estoque, categoria.
Evita duplicatas por nome (case-insensitive).

Exemplo de Produto:
{
  "nome": "Farinha de Trigo 1kg",
  "preco": 5.99,
  "estoque": 180,
  "categoria": "Alimentos"
}

Clientes

POST /clientes: Cadastra um cliente (id, nome, cpf, telefone, email).
GET /clientes: Lista todos os clientes.
GET /clientes/:id: Busca um cliente por ID.
PUT /clientes/:id: Atualiza um cliente.
DELETE /clientes/:id: Remove um cliente.

Validações:

Campos obrigatórios: id, nome, cpf, telefone, email.

Exemplo de Cliente:
{
  "id": "11",
  "nome": "Sofia Ribeiro",
  "cpf": "15975348624",
  "telefone": "61987654321",
  "email": "sofia.ribeiro@email.com"
}

Fornecedores

POST /fornecedores: Cadastra um fornecedor (nome, cnpj, contato).
GET /fornecedores: Lista todos os fornecedores.
GET /fornecedores/:id: Busca um fornecedor por ID.
PUT /fornecedores/:id: Atualiza um fornecedor.
DELETE /fornecedores/:id: Remove um fornecedor.

Validações:

Campos obrigatórios: nome, cnpj, contato.
Evita duplicatas por cnpj.

Exemplo de Fornecedor:
{
  "nome": "Distribuidora Bebidas XYZ",
  "cnpj": "11122233344455",
  "contato": "61977776666"
}

Pedidos

POST /pedidos: Cadastra um pedido (clienteId, itens com produtoId e quantidade).
GET /pedidos: Lista todos os pedidos.
GET /pedidos/:id: Busca um pedido por ID.
PUT /pedidos/:id: Atualiza um pedido.
DELETE /pedidos/:id: Remove um pedido.

Validações:

Campos obrigatórios: clienteId, itens (array não vazio).
Valida se os produtoId existem na lista de produtos.
Calcula o valorTotal automaticamente com base nos preços dos produtos.

Exemplo de Pedido:
{
  "clienteId": "3",
  "itens": [
    { "produtoId": "301", "quantidade": 2 },
    { "produtoId": "302", "quantidade": 3 }
  ]
}

Categorias

POST /categorias: Cadastra uma categoria (nome).
GET /categorias: Lista todas as categorias.
GET /categorias/:id: Busca uma categoria por ID.
PUT /categorias/:id: Atualiza uma categoria.
DELETE /categorias/:id: Remove uma categoria.

Validações:

Campo obrigatório: nome.
Evita duplicatas por nome (case-insensitive).

Exemplo de Categoria:
{
  "nome": "Bebidas"
}

🛠️ Configuração e Execução
Pré-requisitos

Node.js (v16 ou superior)
Postman (para testar a API)
Git (opcional, para controle de versão)

Instalação

Clone o repositório:git clone (https://github.com/LorranLucass/Supermercado-main)
cd Supermercado


Instale as dependências:npm install express


Inicie o servidor:node app.js

O servidor estará rodando em http://localhost:3000.

Testando a API

Importe a coleção do Postman (supermercado_crud_tests.json) fornecida.
Configure o ambiente no Postman com a variável base_url definida como http://localhost:3000.
Execute as requisições em cada pasta (Produtos, Clientes, Fornecedores, Pedidos, Categorias) na ordem: POST, GET, PUT, DELETE.
Verifique os resultados nos scripts de teste do Postman.

Nota: IDs de produtos e pedidos são gerados dinamicamente. Use GET /produtos e GET /pedidos para obter IDs reais antes de testar PUT ou DELETE.
📊 Dados Cadastrados
Os seguintes dados foram criados e testados via Postman:

Produtos:
Farinha de Trigo 1kg, Desinfetante 500ml, Leite em Pó 400g, Amaciante 1L, Açúcar 1kg, entre outros.


Clientes:
Sofia Ribeiro, Mateus Carvalho, Ana Pereira, Carlos Mendes, Beatriz Oliveira, entre outros.


Fornecedores:
Distribuidora Bebidas XYZ, Higiene Total LTDA, Atacado Grãos Brasil, entre outros.


Pedidos:
Pedidos com clienteId de clientes existentes e itens contendo produtos como Arroz 5kg e Detergente Ypê.


Categorias:
Bebidas, Higiene Pessoal.

🔧 Melhorias Futuras

Adicionar persistência de dados com um banco de dados (ex: SQLite, MongoDB).
Implementar autenticação e autorização para os endpoints.
Adicionar validações mais robustas (ex: formato de CPF, CNPJ).
Criar endpoints para relatórios (ex: total de vendas por cliente).
Expandir a coleção do Postman com mais casos de teste (ex: erros de validação).

📝 Autor
Desenvolvido pelos participantes: Lorran Lucas, Victor Henrique, Lucas Lopes, Igor Marques. Contribuições e sugestões são bem-vindas!
