const db = require('../db/db')
function getUsers(req, res) {
    const sql = 'SELECT * FROM `users`'
    db.query(sql, (err, results) => {
        if (err) return res.send({ message: 'Error!' })
        return res.send(results)
    })
}



module.exports = getUsers