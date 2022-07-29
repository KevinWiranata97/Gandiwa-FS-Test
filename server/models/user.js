const { Model } = require("objection");
const { hashpassword } = require("../helpers/bcrypt");
class User extends Model {
  static get tableName() {
    return "users";
  }

  async $beforeInsert() {
    this.password = await hashpassword(this.password);
  }
}

module.exports = User;
