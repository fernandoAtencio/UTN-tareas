const express = require("express");
const router = express.Router();
const multer = require("multer");
const config = { dest: "./public/tmp" };
const upload = multer(config);
const service = require("./../../services/docentes");
const { get, update, getSingle } = require("./../../models/docentes");

const create = async (req, res) => {
  const idFile = await service.createDocente(req.body, req.file);
  res.redirect("/admin/docentes/create");
};

const actualizar = async (req, res) => {
  console.log(req.body);
  const idFile = await service.updateDocente(req.body, req.file, req.params.id);
  res.redirect("/admin/docentes");
};

router.get("/", async (req, res) => {
  const docentes = await get();
  res.render("admindocentes", { docentes });
});
router.get("/create", (req, res) => res.render("admindocentesalta"));
router.get("/update/:id", async (req, res) => {
  const docente = await getSingle(req.params.id);
  res.render("admindocentesupdate", { docente });
});
router.get("/baja/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await update({ habiitado: 0, eliminado: 1 }, id);
    res.redirect("/admin/docentes");
  } catch (error) {
    console.log(error);
  }
});

router.get("/create", (req, res) => res.render("admindocentes"));
router.post("/create", upload.single("imagen"), create);
router.post("/update/:id", upload.single("imagen"), actualizar);
module.exports = router;
