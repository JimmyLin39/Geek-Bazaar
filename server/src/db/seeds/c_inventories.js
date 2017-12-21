
exports.seed = function(knex, Promise) {
  const inventories = [
    {id: 1, name: '10 Days in Africa', description: 'You have 10 DAYS IN AFRICA', price: '80', condition: 'new', product_id: 1, user_id: 1},
    {id: 2, name: '10 Days in Africa', description: 'You have 10 DAYS IN AFRICA', price: '20', condition: 'good', product_id: 1, user_id: 2},
    {id: 3, name: '10 Days in Europe', description: 'There is much to be discovered in Europe!', price: '20', condition: 'like new', product_id: 2, user_id: 3},
    {id: 4, name: '10 Days in Europe', description: 'There is much to be discovered in Europe!', price: '30', condition: 'new', product_id: 2, user_id: 1},
  ];

  // Deletes ALL existing entries
  return knex('inventories').del()
    .then(function () {
      // Inserts seed entries
      return knex('inventories')
        .insert(inventories)
        .then(() => 
          knex.raw(`ALTER SEQUENCE inventories_id_seq RESTART WITH ${inventories.length + 1}`)
        );
    });
};
