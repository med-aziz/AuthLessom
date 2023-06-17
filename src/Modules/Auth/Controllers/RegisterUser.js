const userModel = require("../../../Data/Models/User.Model");

const registerUser = async (req, res, next) => {
	try {
		const user = await userModel.create(req.body);
		return res.status(200).send({
			message: "User Registered Successfully",
			payload: user,
		});
	} catch (err) {
		res.status(500).send({ message: "Enable To Create User" });
	}
};

module.exports = registerUser;
