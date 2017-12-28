exports.up = function(knex, Promise) {
  return knex.schema.table('inventories', function(table) {
    table.dropForeign('product_id');
    table.text('image_url');
    table.text('image_name');
  }).then(function(){
    return knex.schema.table('inventories', function(table) {
      table.dropColumn('product_id');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('inventories', function(table) {
    table.integer('product_id');
    table.dropColumn('image_url');
    table.dropColumn('image_name');
  }).then(function() {
    return knex.schema.table('inventories', function(table) {
      table.foreign('product_id').references('products.id').onDelete('CASCADE');
    })    
  })
};
