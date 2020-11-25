const { create, createImages } = require("./../models/docentes");
const { imgFile } = require("./../utils/fileHandler");

const createDocente = async (body, file) => {
  try {
    const { insertId: idDocente } = await create(body);
    const uid = imgFile(file);
    const obj = { idDocente, uid };
    const { insertId: idFile } = await createImages(obj);
    return idFile;
  } catch (e) {
    console.error(e);
  }
};

const updateDocente = async (body, file, id) => {
  try {
    const { insertId: idDocente } = await update(body, id); // retorna el insertId
    const uid = imgFile(file); // retorna el name de la imagen
    const obj = { idDocente, uid };
    const { insertId: idFile } = await updateImages(obj, id);
    return idFile;
  } catch (e) {
    console.error(e);
  }
};

module.exports = { createDocente, updateDocente };
