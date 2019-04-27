exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments('user_id').primary();
    table.string('username').notNullable().unique();
    table.string('password').notNullable();
    table.string('name');
    table.string('email');
    table.string('address');
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users');

};
