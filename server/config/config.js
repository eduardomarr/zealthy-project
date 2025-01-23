require('dotenv').config();

module.exports = {
  development: {
    username: process.env.MYSQLDB_USER,
    password: process.env.MYSQLDB_PASSWORD,
    database: process.env.MYSQLDB_DATABASE,
    host: process.env.MYSQLDB_HOST,
    port: process.env.MYSQLDB_LOCAL_PORT,
    dialect: 'mysql',
  },
  qa: {
    username: process.env.MYSQLDB_USER_QA,
    password: process.env.MYSQLDB_PASSWORD_QA,
    database: process.env.MYSQLDB_DATABASE_QA,
    host: process.env.MYSQLDB_HOST_QA,
    port: process.env.MYSQLDB_PORT_QA,
    dialect: 'mysql',
  },
  production: {
    username: process.env.MYSQLDB_USER_PROD,
    password: process.env.MYSQLDB_PASSWORD_PROD,
    database: process.env.MYSQLDB_DATABASE_PROD,
    host: process.env.MYSQLDB_HOST_PROD,
    port: process.env.MYSQLDB_PORT_PROD,
    dialect: 'mysql',
  },
};
