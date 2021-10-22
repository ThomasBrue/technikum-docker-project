require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

// mongoose.connect(process.env.DATABASE_URL);
mongoose.connect(process.env.DATABASE_URL_DOCKER);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connected to Database!"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.get("/", (req, res) => res.json({ message: "Docker is easy 🐳 Jimmy" }));

// app.listen(3000, () => console.log("Server Started!"));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
