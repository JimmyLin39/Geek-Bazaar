exports.up = function(knex, Promise) {
  return knex.schema.table('line_items', function(table) {
    table.integer('user_id');
  }).then(function(){
    return knex.schema.table('line_items', function(table){
      table.foreign('user_id').references('users.id').onDelete('CASCADE');
    })
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.table('line_items', function(table) {
    table.dropForeign('user_id');
    table.dropColumn('user_id');
  })
};
