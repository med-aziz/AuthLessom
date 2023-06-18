const express = require("express");
const registerUser = require("../Controllers/RegisterUser");
const createFullName = require("../Middlewares/CreateFullName");
const loginUser = require("../Controllers/LoginUser");
const hashPassword = require("../Middlewares/EncryptPassword");
const authMiddleware = require("../Middlewares/authMiddleware");
const getMyProfile = require("../Controllers/GetMyProfile");

const authRouter = express.Router();

authRouter.post("/sign-up", createFullName, hashPassword, registerUser);
authRouter.post("/login", loginUser);
authRouter.get("/profile/me", authMiddleware, getMyProfile);
module.exports = authRouter;
