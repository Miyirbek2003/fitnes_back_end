const db = require('../db/db')
function editUser(req, res) {
    const id = req.params.id
    const { fullName, price, tarif, date, skidka, coach, payment, phone } = req.body
    var sql = "UPDATE `users` SET ? WHERE id = ?";
    db.query(sql, [{ fullName, price, tarif, date, skidka, coach, payment, phone }, id], (err, results) => {
        if (err) return res.send({ message: { err } })
        return res.send({ message: 'Changed!' })    
    })
}



module.exports = editUser