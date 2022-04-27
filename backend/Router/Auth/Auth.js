const router = require("express").Router();
const model = require("../../Model/model");
const Joi = require("@hapi/joi");
const bycrpt = require("bcryptjs");

//Register validaton
const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});
//Register
router.post("/register", async (req, res) => {
  const validation = schema.validate(req.body);
  if (validation.error)
    return res.status(400).send(validation.error.details[0].message);
  //User exist
  const userExist = await model.findOne({ email: req.body.email });
  if (userExist) return res.status(400).send("User Exist");

  // hash passowrd
  const salt = await bycrpt.genSalt(10);
  const hashedPassword = await bycrpt.hash(req.body.password, salt);

  //Creat a new user
  const register = new model({
    name: req.body.name,
    email: req.body.email,
    password: hashedPassword,
  });
  try {
    const saveUser = await register.save();
    res.send(saveUser);
  } catch (error) {
    res.status(400).send(error);
  }
});

//Login Validation

const loginschema = Joi.object({
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
});

//Login
router.post("/login", async (req, res) => {
  //validation
  const loginValidation = loginschema.validate(req.body);
  if (loginValidation.error)
    return res.status(400).send(loginValidation.error.details[0].message);
  // user exist

  const userExist = await model.findOne({ email: req.body.email });
  if (!userExist) return res.status(400).send("User Doesnt Exist");

  // check password

  const valiPassword = await bycrpt.compare(
    req.body.password,
    userExist.password
  );
  if (!valiPassword) return res.status(400).send("Invalid password");

  res.send("Loggin");

  //   const login = new model({
  //     email: req.body.email,
  //     password: req.body.password,
  //   })

  res.send("loggin");
});

module.exports = router;
