
exports.seed = function(knex, Promise) {
  const users = [
    { id: 1, full_name: 'Alice', display_name: 'Alice', email: 'alice@user.com', password: 'alice', address: 'main street' },
    { id: 2, full_name: 'Bob', display_name: 'Bob', email: 'bob@user.com', password: 'bob', address: 'main street' },
    { id: 3, full_name: 'Charlie', display_name: 'Charlie', email: 'charlie@user.com', password: 'charlie', address: 'main street' }
  ];

  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users')
        .insert(users)
        .then(() => 
          knex.raw(`ALTER SEQUENCE users_id_seq RESTART WITH ${users.length + 1}`)
        );  
    });
};
