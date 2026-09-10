const express = require("express");

const userRoutes = require("./routes/userRoutes");

const app = express();

app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "user-service",
    status: "UP"
  });
});

app.use("/users", userRoutes);

module.exports = app;
