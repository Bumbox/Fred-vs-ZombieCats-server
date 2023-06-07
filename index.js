const express = require('express')
const cors = require('cors')
const dbConnection = require('./knex/knexDb')
const router = require('./routes/userRoutes');
require('dotenv').config()

const PORT = process.env.PORT || 8080
const app = express()

app.use(cors())
app.use(express.json())

app.use('/', router )

dbConnection.migrate.latest().then((migration) => {
    if (migration) {
        console.log('MIGRATION', migration)
        app.listen(PORT, ()=>console.log(`SERVER RUNNING ON PORT ${PORT}`))
    }
})