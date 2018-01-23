'use strict'

// Require Express
const express = require('express')

// Create the app and respond with the process id
const app = express()
app.get('/', (req, res) => {
    res.send('Hello from Node.js! My process id is: <b>' + process.pid + '</b>')
})

// Start the app
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('App listening on port ' + port)
})
