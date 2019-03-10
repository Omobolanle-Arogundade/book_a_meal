require('dotenv').config();

module.exports = {
  development: {
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DATABASE,
    host: process.env.POSTGRES_HOST,
    dialect: 'postgres',
  },
  test: {
    username: 'tester',
    password: 'password',
    database: 'book_a_meal',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
  },
  travis: {
    username: 'tester',
    password: 'password',
    database: 'book_a_meal',
    host: 'localhost',
    port: 5432,
    dialect: 'postgres',
  },
};
