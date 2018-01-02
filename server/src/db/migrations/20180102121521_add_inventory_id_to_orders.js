exports.up = function(knex, Promise) {
  return knex.schema.table('orders', function(table) {
    table.integer('inventory_id');
  }).then(function(){
    return knex.schema.table('orders', function(table){
      table.foreign('inventory_id').references('inventories.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('orders', function(table) {
    table.dropForeign('inventory_id');
    table.dropColumn('inventory_id');
  })
};
