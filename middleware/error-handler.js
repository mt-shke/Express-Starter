const ErrorHandlerMiddleware = (err, req, res, next) => {
	let customError = {
		statusCode: err.statusCode || 500,
		message: err.message || "Error server",
	};

	return res.status(customError.statusCode).json({ success: false, message: customError.message });
};

module.exports = ErrorHandlerMiddleware;
