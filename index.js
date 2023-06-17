const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { SERVER_CONFIG, DATABASE_CONFIG } = require("./config");
const authRouter = require("./src/Modules/Auth/Routes");

const PORT = SERVER_CONFIG.port;
const app = express();
app.use(
	cors({
		credentials: true,
	})
);
app.use(express.json());
app.use(authRouter);
app.listen(PORT, () => {
	console.log(`Listening at ${PORT}`);
	mongoose.connect(DATABASE_CONFIG.url).then(() => {
		console.log(`Connected to mongodb datbase : ${DATABASE_CONFIG.dbName}`);
	});
});
