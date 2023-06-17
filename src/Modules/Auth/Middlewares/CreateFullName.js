const createFullName = async (req, _res, next) => {
	if (req.body.firstName && req.body.lastName) {
		req.body.fullName = req.body.firstName + " " + req.body.lastName;
		next();
	} else {
		_res
			.status(400)
			.send({ message: "Please Give Me your first and last name" });
	}
};

module.exports = createFullName;
