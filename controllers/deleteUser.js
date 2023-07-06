const db = require('../db/db')
function deleteUser(req, res) {
    const id = req.params.id
    const sql = "DELETE FROM `users` WHERE id = ? and name= ?"
    db.query(sql, [id], (err, results) => {
        if (err) return res.send({ message: 'Error!' })
        return res.send({ message: 'Deleted!' })
    })
}



module.exports = deleteUser