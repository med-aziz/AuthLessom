const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG, REFRESH_COOKIE_NAME } = require("../../../../config");
const userModel = require("../../../Data/Models/User.Model");
const {
	createJwtAccessToken,
	createJwtRefreshToken,
} = require("../Utils/Tokens");

const refreshUserTokens = async (req, res, next) => {
	try {
		if (!req.cookies?.rtk) {
			throw new Error("No Refresh Token Received");
		}
		const refreshTokenPayload = jsonwebtoken.verify(
			req.cookies.rtk,
			JWT_CONFIG.publicKeyRefresh
		);
		const userId = refreshTokenPayload.sub;
		const userFound = await userModel.findById(userId).select(["-password"]);
		const userProfile = userFound._doc;
		const accessToken = createJwtAccessToken(userProfile);
		const refreshToken = createJwtRefreshToken(userProfile);
		res.cookie(REFRESH_COOKIE_NAME, refreshToken);
		res.status(200).send({
			message: "Success",
			payload: {
				profile: userProfile,
				accessToken: accessToken,
			},
		});
	} catch (err) {
		console.log("error:", err);
		res.status(403).send({ message: "Not Authorized" });
	}
};

module.exports = refreshUserTokens;
