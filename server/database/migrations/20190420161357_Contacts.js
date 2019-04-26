exports.up = function (knex, Promise) {
  knex.schema.createTable('contacts', table => {
    table.increments('id').primary();
    table.string('name');
    table.timestamps(true, true);
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('email');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts');
};
