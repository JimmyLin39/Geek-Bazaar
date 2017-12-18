exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('users', function(table){
      table.increments();
      table.string('full_name');
      table.string('display_name');
      table.string('email');
      table.string('password');
      table.string('address');
      table.string('avatar');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('inventories', function(table){
      table.increments();
      table.string('name');
      table.string('description');
      table.varchar('price');
      table.integer('user_id');
      table.integer('product_id');
      table.string('condition');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('products', function(table){
      table.increments();
      table.string('name');
      table.string('category');
      table.string('thumbnail');
      table.string('image');
      table.string('description');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('orders', function(table){
      table.increments();
      table.integer('buyer_id');
      table.integer('seller_id');
      table.integer('total_cents');
      table.string('status');
      table.date('date_of_agreement');
      table.string('type');
      table.timestamps(true, true);
    }),
    knex.schema.createTable('line_items', function(table){
      table.increments();
      table.integer('item_price_cents');
      table.integer('order_id');
      table.integer('inventory_id');
      table.timestamps(true, true);
    }),
    ]).then(function(){
    return Promise.all([
      knex.schema.table('orders', function(table){
        table.foreign('buyer_id').references('users.id').onDelete('CASCADE');
        table.foreign('seller_id').references('users.id').onDelete('CASCADE');
      }),
      knex.schema.table('line_items', function(table){
        table.foreign('order_id').references('orders.id').onDelete('CASCADE');
        table.foreign('inventory_id').references('inventories.id').onDelete('CASCADE');
      }),
      knex.schema.table('inventories', function(table){
        table.foreign('product_id').references('products.id').onDelete('CASCADE');
        table.foreign('user_id').references('users.id').onDelete('CASCADE');
      }),
    ])
  })
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.table('orders', function(table){
      table.dropForeign('buyer_id');
      table.dropForeign('seller_id');
    }),
    knex.schema.table('line_items', function(table){
      table.dropForeign('order_id');
      table.dropForeign('inventory_id');
    }),
    knex.schema.table('inventories', function(table){
      table.dropForeign('user_id');
      table.dropForeign('product_id');
    }),
  ]).then(function(){
    return Promise.all([
      knex.schema.dropTable('users'),
      knex.schema.dropTable('orders'),
      knex.schema.dropTable('line_items'),
      knex.schema.dropTable('inventories'),
      knex.schema.dropTable('products'),
    ])
  })
};
