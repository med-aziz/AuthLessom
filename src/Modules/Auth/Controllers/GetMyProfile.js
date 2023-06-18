const userModel = require("../../../Data/Models/User.Model");

const getMyProfile = async (req, res, _next) => {
	const userId = req.user.id;
	const profile = await userModel
		.findOne({ _id: userId })
		.select(["-password"]);
	if (!profile) {
		return res.status(404).send({ message: "user not found" });
	}
	return res
		.status(200)
		.send({ message: "Success", payload: { profile: profile } });
};

module.exports = getMyProfile;
