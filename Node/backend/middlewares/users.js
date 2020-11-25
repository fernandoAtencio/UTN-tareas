const { schemas } = require("./../schemas/Users");

const validateLogin = (req, res, next) => {
  const { error, value } = schemas.auth.validate(req.body);
  console.error();
  error ? res.status(422).json({ error: error.details[0].message }) : next();
};

module.exports = { validateLogin };
