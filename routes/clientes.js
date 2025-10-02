const express = require("express");
const router = express.Router();

let ListaDeClientes = [
  { id: "1", nome: "João Silva", cpf: "12345678900", telefone: "61999999999", email: "joao@email.com" },
  { id: "2", nome: "Maria Souza", cpf: "98765432100", telefone: "61988888888", email: "maria@email.com" },
];

// POST
router.post("/clientes", (req, res) => {
  const { nome, cpf, telefone, email } = req.body;

  if (!nome || !cpf || !telefone || !email) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  const clienteExistente = ListaDeClientes.find((c) => c.cpf === cpf);
  if (clienteExistente) return res.status(409).json({ error: "Cliente já cadastrado!" });

  const novoCliente = { id: String(Date.now()), nome, cpf, telefone, email };
  ListaDeClientes.push(novoCliente);
  res.status(201).json({ message: "Cliente cadastrado com sucesso!", cliente: novoCliente });
});

// GET
router.get("/clientes", (req, res) => res.status(200).json(ListaDeClientes));

router.get("/clientes/:id", (req, res) => {
  const cliente = ListaDeClientes.find((c) => c.id === req.params.id);
  if (!cliente) return res.status(404).json({ error: "Cliente não encontrado!" });
  res.status(200).json(cliente);
});

// PUT
router.put("/clientes/:id", (req, res) => {
  const { nome, cpf, telefone, email } = req.body;
  if (!nome || !cpf || !telefone || !email) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios!" });
  }

  const index = ListaDeClientes.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Cliente não encontrado!" });

  const clienteAtualizado = { id: req.params.id, nome, cpf, telefone, email };
  ListaDeClientes[index] = clienteAtualizado;

  res.json({ message: "Cliente atualizado com sucesso!", cliente: clienteAtualizado });
});

// DELETE
router.delete("/clientes/:id", (req, res) => {
  const index = ListaDeClientes.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Cliente não encontrado!" });

  ListaDeClientes = ListaDeClientes.filter((c) => c.id !== req.params.id);
  res.json({ message: "Cliente excluído com sucesso!" });
});

module.exports = router;