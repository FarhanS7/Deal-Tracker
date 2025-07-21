const express = require("express");
const cors = require("cors");
const deals = require("./mockDeals");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

app.get("/deals", (req, res) => {
  res.json(deals);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
