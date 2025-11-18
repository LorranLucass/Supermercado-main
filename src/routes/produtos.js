const express = require("express");
const router = express.Router();

let ListaDeProdutos = [
  {
    id: "301",
    nome: "Arroz 5kg",
    preco: 25.90,
    estoque: 100,
    categoria: "Alimentos"
  },
  {
    id: "302",
    nome: "Detergente Ypê",
    preco: 2.50,
    estoque: 300,
    categoria: "Limpeza"
  },
];

// POST - cadastrar produto.
router.post("/produtos", (req, res) => {
  const { nome, preco, estoque, categoria } = req.body;

  if (!nome || preco === undefined || estoque === undefined || !categoria) {
    return res.status(400).json({
      error: "Os campos nome, preco, estoque e categoria são obrigatórios!",
    });
  }

  const produtoExistente = ListaDeProdutos.find(
    (p) => p.nome.toLowerCase() === nome.toLowerCase()
  );
  if (produtoExistente) {
    return res
      .status(409)
      .json({ error: "Um produto com este nome já está cadastrado!" });
  }

  const novoProduto = {
    id: String(Date.now()),
    nome,
    preco,
    estoque,
    categoria,
  };

  ListaDeProdutos.push(novoProduto);
  res.status(201).json({ message: "Produto cadastrado com sucesso!", produto: novoProduto });
});

// GET - listar todos.
router.get("/produtos", (req, res) => {
  res.status(200).json(ListaDeProdutos);
});

// GET - buscar por ID.
router.get("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const produto = ListaDeProdutos.find((p) => p.id === id);

  if (!produto) {
    return res.status(404).json({ error: "Produto não encontrado!" });
  }

  res.status(200).json(produto);
});

// PUT - atualizar.
router.put("/produtos/:id", (req, res) => {
  const { id } = req.params;
  const { nome, preco, estoque, categoria } = req.body;

  if (!nome || preco === undefined || estoque === undefined || !categoria) {
    return res.status(400).json({
      error: "Os campos nome, preco, estoque e categoria são obrigatórios!",
    });
  }

  const produtoIndex = ListaDeProdutos.findIndex((p) => p.id === id);
  if (produtoIndex === -1) {
    return res.status(404).json({ error: "Produto não encontrado!" });
  }

  const produtoAtualizado = { id, nome, preco, estoque, categoria };
  ListaDeProdutos[produtoIndex] = produtoAtualizado;

  res.status(200).json({ message: "Produto atualizado com sucesso!", produto: produtoAtualizado });
});

// DELETE - remover.
router.delete("/produtos/:id", (req, res) => {
  const { id } = req.params;

  const produtoIndex = ListaDeProdutos.findIndex((p) => p.id === id);
  if (produtoIndex === -1) {
    return res.status(404).json({ error: "Produto não encontrado!" });
  }

  ListaDeProdutos.splice(produtoIndex, 1);
  res.status(204).send();
});

module.exports = {
  produtosRouter: router,
  ListaDeProdutos,
};