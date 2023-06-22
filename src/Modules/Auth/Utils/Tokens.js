const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");

const createJwtToken = (userPayload, privateKey, expirationPeriod) => {
	const payload = {
		sub: userPayload._id,
		iat: Math.floor(Date.now() / 1000),
	};
	const token = jsonwebtoken.sign(payload, privateKey, {
		algorithm: "RS256",
		expiresIn: expirationPeriod,
	});
	return token;
};

const createJwtAccessToken = (userPayload) =>
	createJwtToken(
		userPayload,
		JWT_CONFIG.privateKey,
		JWT_CONFIG.accessTokenExpirationPeriod
	);
const createJwtRefreshToken = (userPayload) =>
	createJwtToken(
		userPayload,
		JWT_CONFIG.privateKeyRefresh,
		JWT_CONFIG.refreshTokenExpirationPeriod
	);

module.exports = { createJwtAccessToken, createJwtRefreshToken };

// Request -> Route Not Protected -> Controller -> Response
// Request -> Route Protected -> Auth Middleware -> Access Token Verified -> Controller -> Response
// Request -> Route Protected -> Auth Middleware -> Falsy Access Token -> Response With Error 403
// Request -> Refresh Route -> Refresh Controller (if refresh Token Valid -> send new Access
// And Refresh Tokens + User Info

// Steps In Refresh Controller
// 1 - Check If Refresh Token Cookie Is Received(if exists continue else send error)// req.cookies
// 2 - Verify Refresh Token (if verified continue else send error)
// 3 - get user profile info from the database
// 4 - create new access and refresh tokens for this user
// 5 - set refresh token cookie for the client // res.cookie('refreshT', refreshToken)
// 6 - send user profile and the access token in the payload
