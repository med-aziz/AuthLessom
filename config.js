require("dotenv/config");

const JwtConfig = {
	privateKey: process.env.JWT_ACCESS_PRIVATE_KEY.replace(/\\n/g, "\n"),
	publicKey: process.env.JWT_ACCESS_PUBLIC_KEY.replace(/\\n/g, "\n"),
	privateKeyRefresh: process.env.JWT_REFRESH_PRIVATE_KEY.replace(/\\n/g, "\n"),
	publicKeyRefresh: process.env.JWT_REFRESH_PUBLIC_KEY.replace(/\\n/g, "\n"),
	accessTokenExpirationPeriod: process.env.JWT_ACCESS_EXPIRATION_PERIOD,
	refreshTokenExpirationPeriod: process.env.JWT_REFRESH_EXPIRATION_PERIOD,
};

const REFRESH_COOKIE_NAME = "rtk";

const ServerConfig = {
	port: process.env.PORT,
};

const DatabaseConfig = {
	url: process.env.DATABASE_URL,
	dbName: process.env.DATABASE_NAME,
};

module.exports = {
	SERVER_CONFIG: ServerConfig,
	DATABASE_CONFIG: DatabaseConfig,
	JWT_CONFIG: JwtConfig,
	REFRESH_COOKIE_NAME,
};
