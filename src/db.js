const mysql = require('mysql');
const config = require("./config");

const database = config.database;
const rootUser = config.rootUser;
const host = config.localhost;
const password = config.DB_Password;


exports.db = mysql.createConnection({
    host: host,
    user: rootUser,
    password: password,
    database: database
});