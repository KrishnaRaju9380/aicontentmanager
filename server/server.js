const express = require("express");
const cors = require("cors");
require("dotenv").config();

require("./config/db");

const contentRoutes = require("./routes/contentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/content", contentRoutes);

app.get("/", (req, res) => {
  res.send("AI Content Manager API Running 🚀");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});