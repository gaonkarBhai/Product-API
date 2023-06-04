// 3.6.2023

require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const connDB = require("./db/conn");
const router = require("./routes/productRoute");

app.use(express.json());
app.use("/api/v1/product", router);

app.get("/", (req, res) => {
  res.status(200).json({ message: "Happy coding" });
});

const start = () => {
  try {
    connDB();
    app.listen(port, () => console.log("Server is live"));
  } catch (error) {
    console.log(error);
  }
};

start();
