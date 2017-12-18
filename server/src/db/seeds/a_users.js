
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        { full_name: 'Alice', display_name: 'Alice', email: 'alice@user.com', password: 'alice', address: 'main street' },
        { full_name: 'Bob', display_name: 'Bob', email: 'bob@user.com', password: 'bob', address: 'main street' },
        { full_name: 'Charlie', display_name: 'Charlie', email: 'charlie@user.com', password: 'charlie', address: 'main street' }
      ]);
    });
};
