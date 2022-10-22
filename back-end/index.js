const express = require('express')
const app = express()
const cors = require('cors')

app.use(
  express.urlencoded({
    extended: false
  })
)
app.use(express.json())
app.use(
  cors({
    origin: '*'
  })
)

require('./src/controllers/questionsController')(app)

app.listen(3001, () => {
  console.log('API ON FIRE!')
})
