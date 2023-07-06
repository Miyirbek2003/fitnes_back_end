const db = require('../db/db')

function getOnlyUser(req, res) {
    const id = req.params.id
    const sql = 'SELECT * FROM `users` WHERE id = ?'
    db.query(sql, [id], (err, results) => {
        if (err) return res.send({ message: 'Error!' })
        return res.send(results)
    })
}



module.exports = getOnlyUser