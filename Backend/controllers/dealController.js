const deals = require("../mockDeals");

const getDeals = (req, res) => {
  res.json(deals);
};

module.exports = { getDeals };
