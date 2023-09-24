require('dotenv').config();
module.exports = {
    port: process.env.PORT || 6000,
    database: process.env.DATABASE,
    rootUser: process.env.ROOTUSER,
    host: process.env.HOST,
    DB_Password: process.env.DB_PWD,
};