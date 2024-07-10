require("dotenv").config();
const connectDB = require("./config/db");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const memeRoutes = require("./routes/memeRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();
const port = process.env.PORT || 3000;

connectDB();

app.use(cors());
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

app.use("/api/memes", memeRoutes);
app.use("/authenticate", authRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
