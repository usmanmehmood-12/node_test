const express = require('express')
const app = express()

require('./routers/index')(app)

app.listen(8080, console.log("server is up"))