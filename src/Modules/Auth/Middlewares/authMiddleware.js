const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");
const authMiddleware = (req, res, next) => {
	try {
		if (!req.headers["authorization"]) {
			throw new Error("No Header");
		}
		const token = req.headers["authorization"].split(" ")[1];
		let decodedToken = jsonwebtoken.verify(token, JWT_CONFIG.publicKey);
		if (decodedToken.exp < Math.floor(Date.now() / 1000)) {
			throw new Error();
		}
		req.user = {};
		req.user.id = decodedToken.sub;
		next();
	} catch (err) {
		console.log(err);
		res.status(403).send({ message: "You must login to access this" });
	}
};

module.exports = authMiddleware;
