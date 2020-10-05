exports.up = function (knex) {
  return knex.schema
    .createTable('departments', (tbl) => {
      tbl.increments();
      tbl.string('name', 128).notNullable().unique();
    })
    .createTable('users', (tbl) => {
      tbl.increments();
      tbl.string('username', 128).notNullable().unique().index();
      tbl.string('password', 256).notNullable();
    })
    .createTable('department_users', (tbl) => {
      tbl
        .integer('department_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('departments')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      tbl.primary(['department_id', 'user_id']);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('department_users')
    .dropTableIfExists('users')
    .dropTableIfExists('departments');
};
