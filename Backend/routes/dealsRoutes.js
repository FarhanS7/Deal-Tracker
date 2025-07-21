const express = require("express");
const router = express.Router();
const { getDeals } = require("../controllers/dealController");

router.get("/", getDeals);

module.exports = router;
