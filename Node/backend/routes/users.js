var express = require("express");
var router = express.Router();

const users = [
  {
    id: 1,
    nombre: "Fernando",
    apellido: "Atencio",
    edad: 44,
    nacionalidad: "Argentina",
  },
  {
    id: 2,
    nombre: "Valeria",
    apellido: "Buitrago",
    edad: 42,
    nacionalidad: "Argentina",
  },
  {
    id: 3,
    nombre: "Juan Cruz",
    apellido: "Atencio",
    edad: 16,
    nacionalidad: "Argentina",
  },
  {
    id: 4,
    nombre: "Valentina",
    apellido: "Atencio",
    edad: 11,
    nacionalidad: "Argentina",
  },
];

const list = (req, res) => {
  res.render("users", { users });
};

const single = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id == id);
  res.render("user", { user });
};

router.get("/list", list);
router.get("/single/:id", single);

module.exports = router;
