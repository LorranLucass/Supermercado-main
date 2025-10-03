<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Supermercado API - Documentação</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
            line-height: 1.6;
            padding: 20px;
            max-width: 900px;
            margin: 0 auto;
            color: #24292e;
        }
        h1 { border-bottom: 2px solid #eaecef; padding-bottom: 0.3em; color: #0366d6; }
        h2 { border-bottom: 1px solid #eaecef; padding-bottom: 0.3em; margin-top: 25px; }
        code { background-color: rgba(27,31,35,.05); padding: 2px 4px; border-radius: 3px; font-size: 85%; }
        pre { background-color: #f6f8fa; padding: 16px; overflow: auto; border-radius: 6px; }
        table { border-collapse: collapse; width: 100%; margin: 20px 0; }
        th, td { border: 1px solid #dfe2e5; padding: 8px 13px; text-align: left; }
        th { background-color: #f1f8ff; }
        .note { background-color: #fffbdd; border-left: 4px solid #ffcc00; padding: 10px; margin: 15px 0; }
    </style>
</head>
<body>

    <h1>🛍️ Supermercado API</h1>
    <p>Uma <strong>API RESTful</strong> robusta para gerenciamento completo de um sistema de supermercado, desenvolvida em <strong>Node.js</strong> e <strong>Express</strong>. Esta API suporta operações <strong>CRUD</strong> (Create, Read, Update, Delete) para os recursos essenciais: <strong>produtos, clientes, fornecedores, pedidos</strong> e <strong>categorias</strong>.</p>

    <hr>

    <h2>🎯 Visão Geral do Projeto</h2>
    <p>O <strong>Supermercado API</strong> foi construído para ser o <em>backbone</em> de um sistema de gerenciamento, focando em:</p>
    <ul>
        <li><strong>Gerenciamento CRUD Completo:</strong> Endpoints dedicados para todas as operações em cinco entidades principais.</li>
        <li><strong>Validações Integradas:</strong> Regras de negócio implementadas (ex: campos obrigatórios, unicidade de nome/CNPJ) para garantir a integridade dos dados.</li>
        <li><strong>Armazenamento em Memória:</strong> Estrutura inicial projetada para alta performance e fácil transição para bancos de dados.</li>
        <li><strong>Testabilidade:</strong> Acompanha uma coleção <strong>Postman</strong> abrangente para testes rápidos e completos.</li>
    </ul>

    <hr>

    <h2>🚀 Funcionalidades Principais (Endpoints)</h2>
    <p>A API fornece o conjunto de endpoints <strong>CRUD</strong> padrão para cada recurso, com regras de validação específicas:</p>

    <table>
        <thead>
            <tr>
                <th>Recurso</th>
                <th>Método</th>
                <th>Rota</th>
                <th>Descrição</th>
                <th>Validações Chave</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Produtos</strong></td>
                <td><code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code></td>
                <td><code>/produtos</code></td>
                <td>Gerencia informações de produtos.</td>
                <td>Campos obrigatórios, nome único.</td>
            </tr>
            <tr>
                <td><strong>Clientes</strong></td>
                <td><code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code></td>
                <td><code>/clientes</code></td>
                <td>Gerencia o cadastro de clientes.</td>
                <td>Campos obrigatórios.</td>
            </tr>
            <tr>
                <td><strong>Fornecedores</strong></td>
                <td><code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code></td>
                <td><code>/fornecedores</code></td>
                <td>Gerencia fornecedores de produtos.</td>
                <td>Campos obrigatórios, CNPJ único.</td>
            </tr>
            <tr>
                <td><strong>Pedidos</strong></td>
                <td><code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code></td>
                <td><code>/pedidos</code></td>
                <td>Gerencia o registro de vendas.</td>
                <td>Validação de <code>produtoId</code>, cálculo automático de <code>valorTotal</code>.</td>
            </tr>
            <tr>
                <td><strong>Categorias</strong></td>
                <td><code>POST</code>, <code>GET</code>, <code>PUT</code>, <code>DELETE</code></td>
                <td><code>/categorias</code></td>
                <td>Gerencia categorias de produtos.</td>
                <td>Campo obrigatório, nome único.</td>
            </tr>
        </tbody>
    </table>

    <h3>Exemplo de Uso: Cadastro de Produto</h3>
    <pre><code>POST /produtos

{
  "nome": "Farinha de Trigo 1kg",
  "preco": 5.99,
  "estoque": 180,
  "categoria": "Alimentos"
}</code></pre>

    <hr>

    <h2>🛠️ Tecnologias Utilizadas</h2>

    <table>
        <thead>
            <tr>
                <th>Categoria</th>
                <th>Tecnologia</th>
                <th>Uso</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><strong>Plataforma</strong></td>
                <td><strong>Node.js</strong></td>
                <td>Ambiente de execução para o <em>backend</em>.</td>
            </tr>
            <tr>
                <td><strong>Framework</strong></td>
                <td><strong>Express</strong></td>
                <td>Criação da API RESTful e gerenciamento de rotas.</td>
            </tr>
            <tr>
                <td><strong>Linguagem</strong></td>
                <td><strong>JavaScript</strong></td>
                <td>Linguagem principal de desenvolvimento.</td>
            </tr>
            <tr>
                <td><strong>Testes</strong></td>
                <td><strong>Postman</strong></td>
                <td>Ferramenta para testes de endpoints e validações.</td>
            </tr>
        </tbody>
    </table>

    <hr>

    <h2>⚙️ Configuração e Execução</h2>

    <h3>Pré-requisitos</h3>
    <ul>
        <li><strong>Node.js</strong> (v16 ou superior)</li>
        <li><strong>Git</strong> (opcional, para clonar o repositório)</li>
    </ul>

    <h3>Instalação</h3>
    <ol>
        <li><strong>Clone o repositório:</strong>
            <pre><code>git clone https://github.com/LorranLucass/Supermercado-main
cd Supermercado</code></pre>
        </li>
        <li><strong>Instale as dependências:</strong>
            <pre><code>npm install</code></pre>
        </li>
    </ol>

    <h3>Execução</h3>
    <ol>
        <li><strong>Inicie o servidor:</strong>
            <pre><code>node app.js</code></pre>
        </li>
        <li>A API estará disponível em: <strong><code>http://localhost:3000</code></strong>.</li>
    </ol>

    <hr>

    <h2>🧪 Testando a API com Postman</h2>
    <p>Uma <strong>Coleção Postman</strong> completa (<code>supermercado_crud_tests.json</code>) está disponível para testar todos os endpoints.</p>

    <ol>
        <li><strong>Importe a Coleção:</strong> Importe o arquivo <code>.json</code> no Postman.</li>
        <li><strong>Configure o Ambiente:</strong> Crie um ambiente e defina a variável <code>base_url</code> como <strong><code>http://localhost:3000</code></strong>.</li>
        <li><strong>Execute os Testes:</strong> Siga a ordem dos testes (POST, GET, PUT, DELETE) para validar a funcionalidade CRUD.</li>
    </ol>

    <div class="note">
        <strong>⚠️ Nota:</strong> IDs de recursos como Produtos e Pedidos são gerados dinamicamente. Use requisições <code>GET</code> para obter os IDs atuais antes de tentar operações <code>PUT</code> ou <code>DELETE</code>.
    </div>

    <hr>

    <h2>📂 Estrutura do Projeto</h2>
    <pre><code>Supermercado/
├── routes/
│   ├── clientes.js       # Rotas para Clientes
│   ├── categorias.js     # Rotas para Categorias
│   ├── fornecedores.js   # Rotas para Fornecedores
│   ├── pedidos.js        # Rotas para Pedidos
│   └── produtos.js       # Rotas para Produtos
├── app.js                # Arquivo principal (servidor)
├── package.json          # Dependências e scripts
└── README.md             # Documentação do projeto</code></pre>

    <hr>

    <h2>📈 Próximos Passos (Melhorias Futuras)</h2>
    <ul>
        <li><strong>Persistência de Dados:</strong> Migração do armazenamento em memória para um <strong>Banco de Dados</strong> (ex: SQLite, MongoDB).</li>
        <li><strong>Segurança:</strong> Implementação de <strong>Autenticação e Autorização</strong> (ex: JWT) para proteger os endpoints.</li>
        <li><strong>Validações Avançadas:</strong> Adicionar validações mais robustas de formato (ex: CPF, CNPJ, e-mail).</li>
    </ul>

    <hr>

    <h2>👥 Contribuições e Autores</h2>
    <p>O projeto foi desenvolvido por:</p>
    <ul>
        <li><strong>Lorran Lucas</strong></li>
        <li><strong>Victor Henrique</strong></li>
        <li><strong>Lucas Lopes</strong></li>
        <li><strong>Igor Marques</strong></li>
    </ul>
    <p>Contribuições, <em>issues</em> e sugestões são sempre bem-vindas!</p>

</body>
</html>
