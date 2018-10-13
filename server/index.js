require('dotenv').config()
const express = require('express')
const session = require('express-session')
const { json } = require('body-parser')
const cors = require('cors')
const PORT = 3001

const app = express()

const testCtrl = require('./controllers/test_controller')
const { SESSION_SECRET } = process.env

app.use(cors())
app.use(json())

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24
    }
  })
)

app.get('/api/test', testCtrl.test)

app.listen(PORT, () =>
  console.log(`Listening on port ${PORT || 'Port Not Defined'}!`)
)
