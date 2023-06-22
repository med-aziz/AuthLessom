const mongoose = require("mongoose");

const USER_COLLECTION_NAME = "users";

const UserSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	fullName: String,
	email: String,
	password: String,
});

const userModel = mongoose.model(USER_COLLECTION_NAME, UserSchema);

module.exports = userModel;
