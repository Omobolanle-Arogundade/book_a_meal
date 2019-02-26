export default {
  development: {
    username: 'bincom',
    password: 'root',
    database: 'book_a_meal',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres',
  },
  test: {
    username: 'bincom',
    password: 'root',
    database: 'book_a_meal',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres',
  },
  production: {
    username: 'bincom',
    password: 'root',
    database: 'book_a_meal',
    host: '127.0.0.1',
    port: 5432,
    secret_key: process.env.SECRET_KEY,
    dialect: 'postgres',
  },
};
