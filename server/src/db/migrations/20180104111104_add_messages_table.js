exports.up = function(knex, Promise) {
  return knex.schema.createTable('messages', function(table) {
    table.increments();
    table.integer('sender_id');
    table.integer('receiver_id');
    table.text('content');
    table.timestamps(true, true);
  }).then(function(){
    return knex.schema.table('messages', function(table){
      table.foreign('sender_id').references('users.id').onDelete('CASCADE');
      table.foreign('receiver_id').references('users.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('messages', function(table){
    table.dropForeign('sender_id');
    table.dropForeign('receiver_id');
  }).then(function() {
    return knex.schema.dropTable('messages')
  })
};
