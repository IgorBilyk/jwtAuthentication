const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");

require("dotenv").config();

const PORT = process.env.PORT;

app.get("/api", (req, res) => {
  res.json({ message: "Hello world !!!" });
});

app.post("/api/posts", verifyToken, (req, res) => {
  res.json({
    message: "User has been created !",
  });
});

//User
const user = {
  id: 1,
  username: "Ihor",
  email: "igor@gmail",
};

app.post("/api/login", (req, res) => {
  jwt.sign({ user}, "secretKey", (err, token) => {
    res.json({
      token,
    });
  });
});
function verifyToken(req, res, next) {
  //Get auth header value
  const bearerHeader = req.headers["authorization"];
}
app.listen(PORT, () => console.log(`The server is running on port ${PORT}`));
