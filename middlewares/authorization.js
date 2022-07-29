const { Movie } = require("../models");

async function staffCustomerAuthorization(req, res, next) {
  try {
    const role = req.userAccess.role;
    const AuthorId = req.userAccess.id;

    if (role === "staff") {
      const findAuthorId = await Movie.findOne({
        where: {
          AuthorId,
        },
      });
      if (!findAuthorId) {
        throw {
          name: "forbidden",
          code: 403,
          msg: "Forbidden access",
        };
      }
    }

    if (role === "customer") {
      throw {
        name: "forbidden",
        code: 403,
        msg: "Forbidden access",
      };
    }

    next();
  } catch (err) {
    next(err);
  }
}

async function adminAuthorization(req, res, next) {
  try {
    const role = req.userAccess.role;

    if (role !== "admin") {
      throw {
        name: "forbidden",
        code: 403,
        msg: "Forbidden access",
      };
    }
    next();
  } catch (err) {
    next(err);
  }
}

module.exports = { staffCustomerAuthorization, adminAuthorization };
