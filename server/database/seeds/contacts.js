exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('contacts').del()
    .then(function () {
      // Inserts seed entries
      return knex('contacts').insert([{
          id: 1,
          name: 'samantha',
          email: 'juntilla@hawaii.edu',
          mobile: '123 456 7890',
          work: '555 555 5555',
          home: '777 777 7777',
          twitter: 'Stygienne',
          instagram: 'logicvirus',
          github: 'sjuntilla'
        },
        {
          id: 2,
          name: 'sam',
          email: 'juntilla@hawaii.edu',
          mobile: '123 456 7890',
          work: '555 555 5555',
          home: '777 777 7777',
          twitter: 'Stygienne',
          instagram: 'logicvirus',
          github: 'sjuntilla'
        },
        {
          id: 3,
          name: 'sams',
          email: 'juntilla@hawaii.edu',
          mobile: '123 456 7890',
          work: '555 555 5555',
          home: '777 777 7777',
          twitter: 'Stygienne',
          instagram: 'logicvirus',
          github: 'sjuntilla'
        }
      ]);
    });
};
