const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())
const userRoutes = require('./routes/users')
const loginRoute = require('./routes/auth')

app.use('/users', userRoutes)
app.use('/login', loginRoute)

app.listen(8080, () => {
    console.log('connected');
})