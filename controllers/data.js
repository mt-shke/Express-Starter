const getData = (req, res) => {
	res.status(200).json({ data: "here is your data  " });
};

const getAllData = (req, res) => {
	res.status(200).json({ data: "all the data" });
};

module.exports = { getData, getAllData };
