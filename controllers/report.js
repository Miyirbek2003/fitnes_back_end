const db = require('../db/db')
function getReport(req, res) {
    const sql = 'SELECT * FROM `users` WHERE date BETWEEN ? AND ?'
    db.query(sql, [req.body.date1, req.body.date2], (err, results) => {
        if (err) return res.send({ message: 'Error!' })
        return res.send(results)
    })
}



module.exports = getReport