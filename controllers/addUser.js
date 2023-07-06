const db = require('../db/db')
function addUser(req, res) {
    const { fullName, price, tarif, date, skidka, coach, payment, phone } = req.body
    const sql = "INSERT INTO `users` (fullName, price, tarif, date, skidka, coach, payment, phone) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(sql, [fullName, price, tarif, date, skidka, coach, payment, phone], (err, results) => {
        if (err) return res.send({ message: 'Error!' })
        return res.send({ message: 'Added!' })
    })
}



module.exports = addUser