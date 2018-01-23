'use strict'

// Require Express
const express = require('express')
const shortid = require('shortid')

// Create an "instance id", which is unique for this instance of the app
const instanceId = shortid.generate()

// Create the app and respond with the instance id
const app = express()
app.get('/', (req, res) => {
    res.send('Hello from Node.js! My instance id is: <b>' + instanceId + '</b>')
})

// Start the app
const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log('App listening on port ' + port)
})
