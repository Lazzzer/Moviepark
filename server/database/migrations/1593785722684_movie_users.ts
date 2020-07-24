import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class MovieUsers extends BaseSchema {
  protected tableName = 'movie_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('movie_id').unsigned().notNullable()
      table.integer('user_id').unsigned().notNullable()
      table.boolean('watched').defaultTo(false)
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.unique(['movie_id', 'user_id'])
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
