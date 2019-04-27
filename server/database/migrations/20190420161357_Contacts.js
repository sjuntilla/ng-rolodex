// exports.up = function (knex, Promise) {
//   knex.schema.createTable('contacts', table => {
//     table.increments('id').primary();
//     table.string('name');
//     table.string('email');
//     table.string('mobile');
//     table.string('work');
//     table.string('home');
//     table.string('twitter');
//     table.string('instagram');
//     table.string('github');
//     table.timestamps(true, true);
//   })
// };

// exports.down = function (knex, Promise) {
//   return knex.schema.dropTable('contacts');
// };
exports.up = function (knex, Promise) {
  return knex.schema.createTable('contacts', table => {
    table.increments();
    table.string('name');
    table.string('email');
    table.string('mobile');
    table.string('work');
    table.string('home');
    table.string('twitter');
    table.string('instagram');
    table.string('github');
    table.integer('created_by').references('user_id').inTable('users');
    table.timestamps(true, true);
  })

};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('contacts');

};
