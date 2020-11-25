const express = require("express");
const router = express.Router();
const model = require("./../models/categorias");
const all = async (req, res) => {
  const categorias = await model.get();
  res.json(categorias);
};

const create = async (req, res) => {
  console.log(req.body);
  const { insertId } = await model.insert(req.body);
  res.json(insertId);
};

router.get("/all", all);
router.post("/create", create);
module.exports = router;
