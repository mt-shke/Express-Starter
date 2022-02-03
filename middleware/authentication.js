const { UnauthenticatedError } = require("../errors");
const jwt = require("jsonwebtoken");

const AuthenticationMiddleware = (req, res, next) => {
	const authHeader = req.headers.authorization;

	if (!authHeader || !authHeader.startsWith("Bearer ")) {
		throw new UnauthenticatedError("You are not authorized to access this content");
	}
	const token = authHeader.split(" ")[1];

	try {
		const payload = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { userId: payload.userId, email: payload.email };
		next();
	} catch (error) {}
};

module.exports = AuthenticationMiddleware;
