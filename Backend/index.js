const express = require("express");
const cors = require("cors");
const dealRoutes = require("./routes/dealsRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use("/deals", dealRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
