const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

app.use('/', serveStatic(path.join(__dirname, '/public'))) 

const port = prosecc.env.PORT || 8080 
app.listen(port)

console.log('Linstenning on port: ' + port)