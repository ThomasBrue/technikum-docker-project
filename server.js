require("dotenv").config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");

console.log(`Provided ENV parameter: ${process.env.DATABASE_URL} `);

const dbConnection =
  process.env.DATABASE_URL || "mongodb://localhost/subscribers";

mongoose.connect(dbConnection);

const db = mongoose.connection;
db.on("error", (error) => console.error(error));

db.once("open", () => console.log("Connected to Database!"));

app.use(express.json());

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);

app.get("/", (req, res) => res.json({ message: "Docker-Demo-App is running" }));

const port = process.env.PORT || 8080;

app.listen(port, () =>
  console.log(`app listening on http://localhost:${port}`)
);
