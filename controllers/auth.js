const { BadRequestError } = require("../errors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
	const { email, password } = req.body;
	// verification
	if (!email && !password) {
		throw new BadRequestError("Please provide a valid email and password");
	}

	// connect to Db, check credentials and give token

	// token
	const token = await jwt.sign({ email }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_LIFETIME });

	res.status(200).json({ message: "login", email, token });
};

const register = async (req, res) => {
	const { email, password } = req.body;

	// verfication
	if (!email || !password) {
		throw new BadRequestError("Please provide a valid email and password");
	}

	// check if email does not already exist in db
	const user = "emailAlreadyexist";
	// if (user) {
	// 	throw new BadRequestError("Your email is already in use");
	// }

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);
	const newUser = { email, hashedPassword };

	// check Db if errors and insert if ok
	res.status(200).json({ message: "Welcome among us", newUser });
};

module.exports = { login, register };
