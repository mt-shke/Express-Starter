const CustomAPIError = require("./custom-error");

class BadRequestError extends CustomAPIError {
	constructor(message) {
		super(message);
		this.statusCode = 401;
	}
}

module.exports = BadRequestError;
