exports.up = function(knex) {
    return knex.schema.createTable('contact', table => {
      table.increments('id')
      table.string('firstName')
      table.string('lastName')
      table.string('email')
      table.string('phoneNumber')
      table.string('subject')
      table.string('message')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('contact')
  };