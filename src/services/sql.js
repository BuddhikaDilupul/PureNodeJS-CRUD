const { db } = require("../db");

exports.connectionStart = () => {
    db.connect(function (err) {
        if (err) throw err;
        console.log("Database Connected!");
    });
}