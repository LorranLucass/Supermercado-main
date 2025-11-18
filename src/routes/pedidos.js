const express = require("express");
const router = express.Router();
const { ListaDeProdutos } = require("./produtos");

let ListaDePedidos = [];

// Post.
router.post("/pedidos", (req, res) => {
  const { clienteId, itens } = req.body;

  if (!clienteId || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ error: "clienteId e itens são obrigatórios!" });
  }

  let valorTotal = 0;
  for (const item of itens) {
    const produto = ListaDeProdutos.find((p) => p.id === item.produtoId);
    if (!produto) {
      return res.status(404).json({ error: `Produto com ID ${item.produtoId} não encontrado.` });
    }
    valorTotal += produto.preco * item.quantidade;
  }

  const novoPedido = {
    id: String(Date.now()),
    clienteId,
    itens,
    valorTotal,
    data: new Date().toISOString(),
  };

  ListaDePedidos.push(novoPedido);
  res.status(201).json({ message: "Pedido cadastrado com sucesso!", pedido: novoPedido });
});

// GET de todos os pedidos.
router.get("/pedidos", (req, res) => {
  res.status(200).json(ListaDePedidos);
});

// GET pedido por ID.
router.get("/pedidos/:id", (req, res) => {
  const pedido = ListaDePedidos.find((p) => p.id === req.params.id);
  if (!pedido) {
    return res.status(404).json({ error: "Pedido não encontrado!" });
  }
  res.status(200).json(pedido);
});

// PUT - atualizar pedido
router.put("/pedidos/:id", (req, res) => {
  const { clienteId, itens } = req.body;

  if (!clienteId || !Array.isArray(itens) || itens.length === 0) {
    return res.status(400).json({ error: "clienteId e itens são obrigatórios!" });
  }

  let valorTotal = 0;
  for (const item of itens) {
    const produto = ListaDeProdutos.find((p) => p.id === item.produtoId);
    if (!produto) {
      return res.status(404).json({ error: `Produto com ID ${item.produtoId} não encontrado.` });
    }
    valorTotal += produto.preco * item.quantidade;
  }

  const index = ListaDePedidos.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Pedido não encontrado!" });
  }

  const atualizado = {
    id: req.params.id,
    clienteId,
    itens,
    valorTotal,
    data: new Date().toISOString(),
  };

  ListaDePedidos[index] = atualizado;
  res.status(200).json({ message: "Pedido atualizado com sucesso!", pedido: atualizado });
});

// Delete
router.delete("/pedidos/:id", (req, res) => {
  const index = ListaDePedidos.findIndex((p) => p.id === req.params.id);
  if (index === -1) {
    return res.status(404).json({ error: "Pedido não encontrado!" });
  }

  ListaDePedidos.splice(index, 1);
  res.status(204).send();
});

// Exportação correta.
module.exports = router;
