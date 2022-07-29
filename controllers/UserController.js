const User = require("../models/user");

class Controller {
  static async getUser(req, res, next) {
    try {
      const user = await User.query();
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  }

  static async createUser(req, res, next) {
    try {
      const { name, email, password, role } = req.body;

      const data = {
        name,
        email,
        password,
        role,
      };
      const newUser = await User.query().insert(data);
      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json("Internal Server Error");
    }
  }

  static async getUserById(req, res, next) {
    try {
      const { id } = req.params;
      const user = await User.query().findById(id);
      res.status(200).json(user);
    } catch (error) {
        console.log(error);
      res.status(500).json("Internal Server Error");
    }
  }
}

module.exports = Controller;
