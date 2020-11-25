const pool = require("./../utils/bd");
const T_CATEGORIAS = "categorias";

/* otra forma de resolver el get con async await y try catch
const get = async (conditions = true) => {
  try {
  const query = "SELECT * FROM ?? WHERE ? AND habilitado = true";
  const params = [T_CATEGORIAS, conditions];
  return await pool.query(query, params);
  } catch (e) {
    return e
  }
};
*/

// resolver el get con then catch en un oneliner
const get = (conditions = true) =>
  pool
    .query("SELECT * FROM ?? WHERE ? and habilitado = true", [
      T_CATEGORIAS,
      conditions,
    ])
    .then((result) => result)
    .catch((e) => e);
const insert = async (obj) => {
  const query = "INSERT INTO ?? SET ?";
  const params = [T_CATEGORIAS, obj];
  return await pool.query(query, params); // {insertId : 2}
};
const modify = () => {};
module.exports = { get, insert, modify };
