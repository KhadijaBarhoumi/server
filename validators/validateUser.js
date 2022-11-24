const Joi = require("joi");
const signupSchema = (body) => {
    const schema = Joi.object({
      firstName: Joi.string().required().min(3).trim(),
      lastName: Joi.string().required().min(3).trim(),
      email: Joi.string().email().required().trim(),
      password: Joi.string().min(4).required().trim(),
      role: Joi.string().valid("USER", "ADMIN").messages({
        "any.only": "Donnee invalide",
      }),
    });
    return schema.validate(body, { abortEarly: false });
  };

  module.exports = { signupSchema,  };