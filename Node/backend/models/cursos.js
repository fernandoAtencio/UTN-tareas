const pool = require("./../utils/bd");
const T_CURSOS = "cursos";
const T_CATEGORIAS = "categorias";

const get = async () => {
  const query =
    "SELECT idCategoria, cu.nombre, cu.id, cat.nombre as nombreCategoria FROM ?? as cu JOIN ?? as cat on cu.idCategoria = cat.id WHERE cu.habilitado = ?";
  const params = [T_CURSOS, T_CATEGORIAS, true];
  return await pool.query(query, params);
};

const single = async (id) => {
  const query =
    "SELECT idCategoria, cu.nombre, cu.id, cat.nombre as nombreCategoria FROM ?? as cu JOIN ?? as cat on cu.idCategoria = cat.id WHERE cu.habilitado = ? AND cu.id = ?";
  const params = [T_CURSOS, T_CATEGORIAS, true, id];
  return await pool.query(query, params);
};

const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CURSOS, obj])
    .then((result) => result)
    .catch((e) => e);

module.exports = { get, single, create };
