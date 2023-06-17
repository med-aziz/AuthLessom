const jsonwebtoken = require("jsonwebtoken");
const { JWT_CONFIG } = require("../../../../config");
const decryptToken = async (req, res, next) => {
	try {
		const token = req.headers["authorization"].split(" ")[1];
		let decodedToken = jsonwebtoken.verify(token, JWT_CONFIG.publicKey);
		res.status(200).send({
			decryptedToken: decodedToken,
		});
	} catch (err) {
		console.log(err);
		res.status(500).send("server error: ");
	}
};

module.exports = decryptToken;
