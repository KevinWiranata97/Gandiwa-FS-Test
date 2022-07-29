/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 * 
 */

const {hashpassword} = require('../../helpers/bcrypt')
exports.seed = async function (knex) {
  // Deletes ALL existing entries

  let data = require('../datas/user.json');
  data.forEach(element => {
    element.password = hashpassword(element.password)
  });
  await knex("users").insert(data);
};
