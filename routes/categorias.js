const express = require("express");
const router = express.Router();

let ListaDeCategorias = [
  { id: "1", nome: "Alimentos"},
  { id: "2", nome: "Bebidas" },
  { id: "3", nome: "Limpeza" },
];

// POST
router.post("/categorias", (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: "O campo nome é obrigatório!" });

  const existente = ListaDeCategorias.find((c) => c.nome.toLowerCase() === nome.toLowerCase());
  if (existente) return res.status(409).json({ error: "Categoria já cadastrada!" });

  const novaCategoria = { id: String(Date.now()), nome };
  ListaDeCategorias.push(novaCategoria);
  res.status(201).json({ message: "Categoria cadastrada com sucesso!", categoria: novaCategoria });
});

// GET
router.get("/categorias", (req, res) => res.status(200).json(ListaDeCategorias));

router.get("/categorias/:id", (req, res) => {
  const categoria = ListaDeCategorias.find((c) => c.id === req.params.id);
  if (!categoria) return res.status(404).json({ error: "Categoria não encontrada!" });
  res.status(200).json(categoria);
});

// PUT
router.put("/categorias/:id", (req, res) => {
  const { nome } = req.body;
  if (!nome) return res.status(400).json({ error: "O campo nome é obrigatório!" });

  const index = ListaDeCategorias.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Categoria não encontrada!" });

  const atualizada = { id: req.params.id, nome };
  ListaDeCategorias[index] = atualizada;
  res.status(200).json({ message: "Categoria atualizada com sucesso!", categoria: atualizada });
});

// DELETE
router.delete("/categorias/:id", (req, res) => {
  const index = ListaDeCategorias.findIndex((c) => c.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Categoria não encontrada!" });

  ListaDeCategorias.splice(index, 1);
  res.status(204).send();
});

module.exports = router;