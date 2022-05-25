const Joi = require("@hapi/joi");

const RegisterValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return Schema.validate(data);
};

module.exports.RegisterValidation = RegisterValidation;
