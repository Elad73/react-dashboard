//prod.js - production keys here!!!
module.exports = {
    port: process.env.SERVER_PORT,
    mySqlHost: process.env.MY_SQL_HOST,
    userName: process.env.MY_SQL_USERNAME,
    pass: process.env.MY_SQL_PASS,
    database: process.env.MY_SQL_DB,
    devMode: process.env.DEV_MODE
};
  
