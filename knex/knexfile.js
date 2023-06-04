// Update with your config settings.
const path = require('path')
const pathToMigrations = path.resolve(__dirname, "../migrations")

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {

    client: 'mysql',
    connection: {
      database: 'fred_vs_zombies_db',
      user:     'root',
      password: ''
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: pathToMigrations,
    }
  };
  