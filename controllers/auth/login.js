const db = require('../../db/db')

function checkLog(req, res) {
    const username = req.body.username
    const password = req.body.password
    const sql = "SELECT * FROM `admin` WHERE username = ? AND password = ?"
    db.query(sql, [password, username], (err, results) => {
        if (err) return {err};
        if (results.length < 1) {
            res.send({ status: false, message: 'Wrong passowrd or username' })
        }
        else {
            res.send({ status: true, message: 'true' })
        }
    })
}


module.exports = checkLog
