const express = require("express");
const registerUser = require("../Controllers/RegisterUser");
const createFullName = require("../Middlewares/CreateFullName");
const loginUser = require("../Controllers/LoginUser");
const hashPassword = require("../Middlewares/EncryptPassword");
const decryptToken = require("../Controllers/Decrypt");

const authRouter = express.Router();

authRouter.post("/sign-up", createFullName, hashPassword, registerUser);
authRouter.post("/login", loginUser);
authRouter.post("/decode", decryptToken);
module.exports = authRouter;
