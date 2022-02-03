require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();

// Routes import
const authRouter = require("./routes/auth");
const dataRouter = require("./routes/data");

// Middleware import
const AuthenticationMiddleware = require("./middleware/authentication");
const ErrorHandlerMiddleware = require("./middleware/error-handler");
const NotFound = require("./middleware/not-found");

app.use(express.json());
// Routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/data", AuthenticationMiddleware, dataRouter);

// Middleware
app.use(ErrorHandlerMiddleware);
app.use(NotFound);

const PORT = process.env.PORT || 3000;

const start = async () => {
	try {
		app.listen(PORT, () => console.log("Server is listening"));
	} catch (error) {}
};

start();
