const express = require("express");
const router = express.Router();
const model = require("./../models/cursos");

const all = async (req, res) => {
  try {
    const cursos = await model.get();
    // res.json(cursos);
    res.render("cursos", { cursos });
  } catch (e) {
    res.render("error");
  }
};

const single = async (req, res) => {
  try {
    const { id } = req.params;
    const [curso] = await model.single(id);
    res.json(curso);
    //res.render("curso", { curso });
  } catch (e) {
    console.log(e);
  }
};

router.get("/single/:id", single);
router.get("/all", all);

module.exports = router;
