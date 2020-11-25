const pool = require("./../utils/bd");
const T_DOCENTES = "docentes";
const T_DOCENTES_IMAGENES = "docente_imagenes";

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const createImages = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_DOCENTES_IMAGENES, obj])
    .then((response) => response)
    .catch((e) => console.log(e));

const update = (obj, id) =>
  pool
    .query("UPDATE ?? SET ? WHERE id = ?", [T_DOCENTES, obj, id])
    .then((response) => response)
    .catch((e) => console.log(e));

const updateImages = (obj, id) =>
  pool
    .query("UPDATE ?? SET ? WHERE idDocente = ?", [
      T_DOCENTES_IMAGENES,
      obj,
      id,
    ])
    .then((response) => response)
    .catch((e) => console.log(e));

const get = async () => {
  const query = "SELECT * FROM ?? WHERE habiitado = ?";
  const params = [T_DOCENTES, 1];
  return await pool.query(query, params);
};

const getSingle = async (id) => {
  const query = "SELECT * FROM ?? WHERE id = ? AND habiitado = ?";
  const params = [T_DOCENTES, id, 1];
  return await pool.query(query, params);
};

module.exports = { create, createImages, update, get, updateImages, getSingle };
