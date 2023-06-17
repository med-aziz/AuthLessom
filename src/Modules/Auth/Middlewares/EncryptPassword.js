const bcrypt = require("bcryptjs");

const hashPassword = async (req, res, next) => {
	const password = req.body.password;
	const salt = await bcrypt.genSalt(13);
	req.body.password = await bcrypt.hash(password, salt);
	next();
};

module.exports = hashPassword;
