const bcrypt = require("bcryptjs");
const { findUserByUsername } = require("../helper/userHelper");

function restricted() {
  return async (req, res, next) => {
    const { username, password } = req.headers;

    if (!username || !password) {
      res.status(401).json({
        message: "Please provide username or password"
      });
    } else {
      const user = await findUserByUsername(username);
        console.log(user.password === password)
      if (user) {
        const compareHash = await bcrypt.compare(password, user.password);
        console.log(compareHash)
        if (!compareHash) {
          return res.status(404).json({
            message: "invalid Credentials"
          });
        }
        next()
      } else {
        res.status(404).json({
          message: "User not found"
        });
      }
      ``;
    }
  };
}

module.exports = {
  restricted
};
