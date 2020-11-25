const pool = require("./../utils/bd");
const T_CURSADAS = "cursadas";
const create = (obj) =>
  pool
    .query("INSERT INTO ?? SET ?", [T_CURSADAS, obj])
    .then((response) => response)
    .catch((e) => console.log(e));
const get = async () => {
  const query = "SELECT * FROM ?? WHERE habilitado = ?";
  const params = [T_CURSADAS, 1];
  return await pool.query(query, params);
};
module.exports = { create, get };
