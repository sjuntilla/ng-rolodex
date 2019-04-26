exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          id: 1,
          username: 'sam',
          password: 'sam'
        },
        {
          id: 2,
          username: 'sams',
          password: 'sams'
        },
        {
          id: 3,
          username: 'aaaaa',
          password: 'aaaAA'
        }
      ]);
    });
};
