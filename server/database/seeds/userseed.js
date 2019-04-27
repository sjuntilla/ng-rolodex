exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([{
          user_id: 1,
          username: 'sam',
          password: 'sam',
          name: 'samantha',
          email: 'juntilla@hawaii.edu',
          address: 'a place'
        },
        {
          user_id: 2,
          username: 'sams',
          password: 'sams',
          name: 'samantha',
          email: 'juntilla@hawaii.edu',
          address: 'a place'
        },
        {
          user_id: 3,
          username: 'aaaaa',
          password: 'aaaAA',
          name: 'samantha',
          email: 'juntilla@hawaii.edu',
          address: 'a place'
        }
      ]);
    });
};
