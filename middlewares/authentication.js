const  User  = require("../models/user");
const { verifyToken } = require("../helpers/jwt");

async function authentication(req, res, next) {
  try {
    const { access_token } = req.headers;
    if (!access_token) {
      throw {
        name: "invalid",
        code: "401",
        msg: `Invalid email or password`,
      };
    }

    const payload = verifyToken(access_token);
    const findUser = await User.query().findOne({
      id: payload.id,
    });

    if (!findUser) {
      throw {
        name: "invalid",
        code: "401",
        msg: `Invalid email or password`,
      };
    }

    req.userAccess = {
      id: findUser.id,
      email: findUser.email,
      username: findUser.username,
      role: findUser.role,
    };

    next();
  } catch (error) {
    console.log(error);
   
  }
}

module.exports = authentication;
