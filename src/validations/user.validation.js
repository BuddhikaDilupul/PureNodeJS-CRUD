const Joi = require("joi");

module.exports = {
  create: {
    body: Joi.object({
      _id: Joi.forbidden(),
      email: Joi.number().required(),
      firstName: Joi.string().required(),
      lastName: Joi.string().required(),
      phone: Joi.number().required(),
    }),
  },
};
