🛍️ Supermercado API
Uma API RESTful robusta para gerenciamento completo de um sistema de supermercado, desenvolvida em Node.js e Express. Esta API suporta operações CRUD (Create, Read, Update, Delete) para os recursos essenciais: produtos, clientes, fornecedores, pedidos e categorias.

🎯 Visão Geral do Projeto
O Supermercado API foi construído para ser o backbone de um sistema de gerenciamento, focando em:

Gerenciamento CRUD Completo: Endpoints dedicados para todas as operações em cinco entidades principais.

Validações Integradas: Regras de negócio implementadas (ex: campos obrigatórios, unicidade de nome/CNPJ) para garantir a integridade dos dados.

Armazenamento em Memória: Estrutura inicial projetada para alta performance e fácil transição para bancos de dados.

Testabilidade: Acompanha uma coleção Postman abrangente para testes rápidos e completos.

🚀 Funcionalidades Principais (Endpoints)
A API fornece o conjunto de endpoints CRUD padrão para cada recurso, com regras de validação específicas:

Recurso	Método	Rota	Descrição	Validações Chave
Produtos	POST, GET, PUT, DELETE	/produtos	Gerencia informações de produtos.	Campos obrigatórios, nome único.
Clientes	POST, GET, PUT, DELETE	/clientes	Gerencia o cadastro de clientes.	Campos obrigatórios.
Fornecedores	POST, GET, PUT, DELETE	/fornecedores	Gerencia fornecedores de produtos.	Campos obrigatórios, CNPJ único.
Pedidos	POST, GET, PUT, DELETE	/pedidos	Gerencia o registro de vendas.	Validação de produtoId, cálculo automático de valorTotal.
Categorias	POST, GET, PUT, DELETE	/categorias	Gerencia categorias de produtos.	Campo obrigatório, nome único.

Exportar para as Planilhas
Exemplo de Uso: Cadastro de Produto
JSON

POST /produtos

{
  "nome": "Farinha de Trigo 1kg",
  "preco": 5.99,
  "estoque": 180,
  "categoria": "Alimentos"
}
Exemplo de Uso: Criação de Pedido
JSON

POST /pedidos

{
  "clienteId": "3",
  "itens": [
    { "produtoId": "301", "quantidade": 2 },
    { "produtoId": "302", "quantidade": 3 }
  ]
}
🛠️ Tecnologias Utilizadas
Categoria	Tecnologia	Uso
Plataforma	Node.js	Ambiente de execução para o backend.
Framework	Express	Criação da API RESTful e gerenciamento de rotas.
Linguagem	JavaScript	Linguagem principal de desenvolvimento.
Testes	Postman	Ferramenta para testes de endpoints e validações.

Exportar para as Planilhas
⚙️ Configuração e Execução
Pré-requisitos
Node.js (v16 ou superior)

Git (opcional, para clonar o repositório)

Instalação
Clone o repositório:

Bash

git clone https://github.com/LorranLucass/Supermercado-main
cd Supermercado
Instale as dependências:

Bash

npm install
Execução
Inicie o servidor:

Bash

node app.js
A API estará disponível em: http://localhost:3000.

🧪 Testando a API com Postman
Uma Coleção Postman completa (supermercado_crud_tests.json) está disponível para testar todos os endpoints.

Importe a Coleção:
Importe o arquivo .json no Postman.

Configure o Ambiente:
Crie um ambiente e defina a variável base_url como http://localhost:3000.

Execute os Testes:
Siga a ordem dos testes (POST, GET, PUT, DELETE) em cada pasta (Produtos, Clientes, etc.) para validar a funcionalidade CRUD.

⚠️ Nota: IDs de recursos como Produtos e Pedidos são gerados dinamicamente. Use requisições GET para obter os IDs atuais antes de tentar operações PUT ou DELETE.

📂 Estrutura do Projeto
Supermercado/
├── routes/
│   ├── clientes.js       # Rotas para Clientes
│   ├── categorias.js     # Rotas para Categorias
│   ├── fornecedores.js   # Rotas para Fornecedores
│   ├── pedidos.js        # Rotas para Pedidos
│   └── produtos.js       # Rotas para Produtos
├── app.js                # Arquivo principal (servidor)
├── package.json          # Dependências e scripts
└── README.md             # Este arquivo
📈 Próximos Passos (Melhorias Futuras)
Estamos planejando as seguintes expansões para a API:

Persistência de Dados: Migração do armazenamento em memória para um Banco de Dados (ex: SQLite, MongoDB) para garantir a persistência dos dados.

Segurança: Implementação de Autenticação e Autorização (ex: JWT) para proteger os endpoints.

Validações Avançadas: Adicionar validações mais robustas de formato (ex: CPF, CNPJ, e-mail).

Relatórios: Criação de endpoints de relatório (ex: total de vendas por período, produtos mais vendidos).

👥 Contribuições e Autores
O projeto foi desenvolvido por:

Lorran Lucas

Victor Henrique

Lucas Lopes

Igor Marques

Contribuições, issues e sugestões são sempre bem-vindas!
