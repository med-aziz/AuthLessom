const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtAccessToken = async (userPayload) => {
	const payload = {
		sub: userPayload._id,
		iat: Math.floor(Date.now() / 1000),
	};
	const token = jsonwebtoken.sign(payload, JWT_CONFIG.privateKey, {
		algorithm: "RS256",
		expiresIn: JWT_CONFIG.accessTokenExpirationPeriod,
	});
	return token;
};

module.exports = createJwtAccessToken;
