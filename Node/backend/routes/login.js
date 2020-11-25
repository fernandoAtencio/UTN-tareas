const express = require("express");
const router = express.Router();
const sha1 = require("sha1");
const { validateLogin } = require("./../middlewares/users");
var getIP = require("ipware")().get_ip;

const { auth } = require("./../models/usuarios");

const login = async (req, res) => {
  try {
    req.body.password = sha1(req.body["password"]);
    const result = await auth(req.body);
    result.length === 0
      ? res.render("login", { message: "User o password incorrecto" })
      : null;
    const [{ id }] = result;
    req.session.idUser = id;
    res.redirect("/admin/cursos/all");
  } catch (e) {
    res.sendStatus(500);
    // res.render('error')
  }
};
router.get("/", (req, res) => {
  const ipInfo = getIP(req);
  console.log(ipInfo);
  res.render("login", {});
});

router.post("/", validateLogin, login);
module.exports = router;
