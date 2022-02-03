const router = require("express").Router();
const { getData, getAllData } = require("../controllers/data");

router.route("/").get(getData);
router.route("/all").get(getAllData);

module.exports = router;
