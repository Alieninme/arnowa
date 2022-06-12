const router = require("express").Router();
const User = require("../models/User");

//get logged in user
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json(user);
  } catch {
    console.log(err);
  }
});

//update desc for user
router.put("/update", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        $set: req.body,
      });
      res.status(200).json("account has been updated");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  } else {
    return res.status(403).json("you can update only your account");
  }
});

//get all users
router.get("/", async (req, res) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err);
  }
  if (!users) {
    return res.status(404).json("no users found");
  }
  return res.status(200).json({ users });
});

module.exports = router;
