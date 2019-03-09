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
    DATABASE_URL: 'postgres://exqkflcahvpvwo:fad87feb4a442d3387f7d85211beaea37a02f15d19c1a0a4877bab362508575e@ec2-54-75-232-114.eu-west-1.compute.amazonaws.com:5432/ddqgg2buoimjvl',
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
