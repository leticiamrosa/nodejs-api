const express = require("express");

const User = require("../models/user");

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    // pass all params for request in body
    const user = User.create(req.body);
    return res.send({ user });
  } catch (err) {
    return res.status(400).send({ error: "Registration Failed" });
  }
});

module.exports = app => app.use("/auth", router);
