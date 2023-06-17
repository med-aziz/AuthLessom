const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtAccessToken = async (userPayload) => {
	const payload = {
		sub: userPayload._id,
		iat: Date.now(),
	};
	const token = jsonwebtoken.sign(payload, JWT_CONFIG.privateKey, {
		algorithm: "RS256",
	});
	return token;
};

module.exports = createJwtAccessToken;
