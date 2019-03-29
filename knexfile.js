module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './database/database.db3',
    },
    useNullAsDefault: true, 
    migrations: {
      directory: './database/migrations',
    },
    seeds: {
      directory: './database/seeds',
    },
    //enforce foreign keys
    pool: {
      afterCreate: (conn, done) => {
        conn.run('PRAGMA foreign_keys = ON', done); 
      },
    },
  },
};