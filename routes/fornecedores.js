const express = require("express");
const router = express.Router();

let ListaDeFornecedores = [
  { id: "301", nome: "Fornecedor Alimentos LTDA", cnpj: "12345678000199", contato: "61999998888" },
  { id: "302", nome: "Fornecedor Limpeza SA", cnpj: "98765432000111", contato: "61988887777" },
];

// POST
router.post("/fornecedores", (req, res) => {
  const { nome, cnpj, contato } = req.body;
  if (!nome || !cnpj || !contato) return res.status(400).json({ error: "nome, cnpj e contato são obrigatórios!" });

  const existente = ListaDeFornecedores.find((f) => f.cnpj === cnpj);
  if (existente) return res.status(409).json({ error: "Fornecedor já cadastrado!" });

  const novoFornecedor = { id: String(Date.now()), nome, cnpj, contato };
  ListaDeFornecedores.push(novoFornecedor);
  res.status(201).json({ message: "Fornecedor cadastrado com sucesso!", fornecedor: novoFornecedor });
});

// GET
router.get("/fornecedores", (req, res) => res.status(200).json(ListaDeFornecedores));

router.get("/fornecedores/:id", (req, res) => {
  const fornecedor = ListaDeFornecedores.find((f) => f.id === req.params.id);
  if (!fornecedor) return res.status(404).json({ error: "Fornecedor não encontrado!" });
  res.status(200).json(fornecedor);
});

// PUT
router.put("/fornecedores/:id", (req, res) => {
  const { nome, cnpj, contato } = req.body;
  if (!nome || !cnpj || !contato) return res.status(400).json({ error: "nome, cnpj e contato são obrigatórios!" });

  const index = ListaDeFornecedores.findIndex((f) => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Fornecedor não encontrado!" });

  const atualizado = { id: req.params.id, nome, cnpj, contato };
  ListaDeFornecedores[index] = atualizado;

  res.json({ message: "Fornecedor atualizado com sucesso!", fornecedor: atualizado });
});

// DELETE
router.delete("/fornecedores/:id", (req, res) => {
  const index = ListaDeFornecedores.findIndex((f) => f.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Fornecedor não encontrado!" });

  ListaDeFornecedores.splice(index, 1);
  res.status(204).send();
});

module.exports = router;