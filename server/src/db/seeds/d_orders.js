
exports.seed = function(knex, Promise) {
  const orders = [
    {id: 1, colName: 'rowValue1'},
    {id: 2, colName: 'rowValue2'},
    {id: 3, colName: 'rowValue3'}
  ];

  // Deletes ALL existing entries
  return knex('orders').del()
    .then(function () {
      // Inserts seed entries
      return knex('orders')
        .insert(orders)
        .then(() => 
          knex.raw(`ALTER SEQUENCE orders_id_seq RESTART WITH ${orders.length + 1}`)
        );
    });
};
