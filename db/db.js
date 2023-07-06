const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: "root",
    database: "fitnes",
    timezone: "Asia/Tashkent"
})


module.exports = db