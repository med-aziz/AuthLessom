const express = require("express");
const registerUser = require("../Controllers/RegisterUser");
const createFullName = require("../Middlewares/CreateFullName");
const loginUser = require("../Controllers/LoginUser");
const hashPassword = require("../Middlewares/EncryptPassword");
const authMiddleware = require("../Middlewares/authMiddleware");
const getMyProfile = require("../Controllers/GetMyProfile");
const refreshUserTokens = require("../Controllers/RefreshController");
const registerValidator = require("../Validators/RegisterValidator");
const {
	validate,
	ValidationSource,
} = require("../../../utils/validationMiddleware");

const authRouter = express.Router();

authRouter.post(
	"/sign-up",
	validate(registerValidator, ValidationSource.BODY),
	createFullName,
	hashPassword,
	registerUser
);
authRouter.post("/login", loginUser);
authRouter.get("/profile/me", authMiddleware, getMyProfile);
authRouter.get("/refresh", refreshUserTokens);
module.exports = authRouter;
