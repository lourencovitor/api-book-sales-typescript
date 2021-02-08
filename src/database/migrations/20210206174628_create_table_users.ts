import * as Knex from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('users', (table) => {
    table.increments('id');
    table
      .integer('role_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('roles');
    table.string('name');
    table.string('email');
    table.string('password');
    table.unique(['email']);

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').defaultTo(null);
  });
}

export async function down(knex: Knex): Promise<void> {}
