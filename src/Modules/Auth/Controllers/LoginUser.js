const userModel = require("../../../Data/Models/User.Model");
const bcrypt = require("bcryptjs");
const createJwtAccessToken = require("../Utils/Tokens");
const loginUser = async (req, res, next) => {
	try {
		const foundUser = await userModel.findOne({
			email: req.body.email,
		});
		if (foundUser) {
			const isPasswordCorrect = await bcrypt.compare(
				req.body.password,
				foundUser?.password
			);
			if (isPasswordCorrect) {
				delete foundUser._doc.password;
				const accessToken = await createJwtAccessToken(foundUser);
				return res.status(200).send({
					message: "Logged in successfully",
					payload: {
						user: foundUser,
						accessToken: accessToken,
					},
				});
			} else {
				return res.status(401).send({
					message: "Password incorrect",
				});
			}
		} else {
			return res.status(401).send({
				message: "Invalid Credentials",
			});
		}
	} catch (err) {
		console.log(err);
		return res.status(500).send({ message: "Server Error" });
	}
};

module.exports = loginUser;

// get user from db with email
// if found check password
// if not return error 401 email not valid
// checking password: compare password sent to password found in the database
// using bcrypt.compare
// if passwords match return status 200 login successful
// if passwords do not match return status 401 incorrect password
