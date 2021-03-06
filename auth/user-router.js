const express = require("express");
const bcrypt = require("bcryptjs");

const router = express.Router();
const {
  findUsers,
  addUser,
  findUserByUsername
} = require("./../helper/userHelper");

router.post("/login", async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    res.status(400).json({
      message: "username or password is undefined"
    });
  } else {
    const user = await findUserByUsername(username);
    const compareHash = await bcrypt.compare(password, user.password);

    if (user && compareHash) {
      res.json({
        message: "login successful",
        user: await findUsers(),
        compareHash: compareHash
      });
    } else {
      return res.status(404).json({
        message: "invalid Credentials"
      });
    }
  }
});

//register
router.post("/register", async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    res.json({
      message: "username or password is undefined"
    });
  } else {
    const user = await addUser({ username, password });
    res.status(200).json({
      message: "Post successful",
      user: user
    });
  }
});

router.get("/users", async (req, res, next) => {
  const users = await findUsers();
  res.status(200).json({
    message: "Successful",
    users: users
  });
});

module.exports = router;
