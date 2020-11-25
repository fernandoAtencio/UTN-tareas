const fs = require("fs");
const { v4: uuid } = require("uuid");
const allowExtensions = ["png", "jpeg"];

const deleteTemp = (file) => fs.unlink(file, (e) => console.log(e));

const saveFile = (
  { mimetype, path, size },
  allowE,
  destFolder = `./public/images`
) => {
  try {
    const [type, extension] = mimetype.split("/");
    if (!allowE.includes(extension)) throw "Formato no permitido";
    const uid = uuid();
    const fileName = `${uid}.${extension}`;
    const fileNameOut = `${destFolder}/${uid}.${extension}`;
    fs.createReadStream(path).pipe(fs.createWriteStream(fileNameOut));
    deleteTemp(path);
    return fileName;
  } catch (e) {
    deleteTemp(path);
    console.error(e);
  }
};
const imgFile = (file) => saveFile(file, allowExtensions);
module.exports = { imgFile };
