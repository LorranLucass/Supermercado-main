const express = require("express");
const app = express();
const PORT = 3000;

// Middleware para receber JSON no body
app.use(express.json());

// Importando rotas
const { produtosRouter } = require("./routes/produtos");
const clientesRouter = require("./routes/clientes");
const fornecedoresRouter = require("./routes/fornecedores");
const pedidosRouter = require("./routes/pedidos");
const categoriasRouter = require("./routes/categorias");

// Rotas
app.use(produtosRouter);
app.use(clientesRouter);
app.use(fornecedoresRouter);
app.use(pedidosRouter);
app.use(categoriasRouter);

// Inicial
app.get("/", (req, res) => {
  res.send("🚀 API do Mercado Online está rodando!");
});

// Subindo o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
