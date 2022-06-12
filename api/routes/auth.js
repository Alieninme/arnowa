const router = require("express").Router();
const User = require("../models/User");

router.post("/login", async (req, res) => {
  try {
    const newUser = await new User({
      username: req.body.username,
      email: req.body.email,
      phone: req.body.phone,
    });
    const user = await newUser.save();
    res.status(200).json(user);
  } catch (err) {
    res.status(409).json("user already exist");
    console.log(err);
  }
});

module.exports = router;
