const Joi = require("joi");
const registerValidator = Joi.object({
	firstName: Joi.string().min(2).max(50).required().label("first name"),
	lastName: Joi.string().min(2).max(50).required().label("last name"),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).max(15).required(),
});

module.exports = registerValidator;
