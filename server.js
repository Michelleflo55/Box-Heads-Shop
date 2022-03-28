const express = require('express');
const routes = require('./routes');
const db = require('./db');
const bodyParser = require('body-parser');
const cors = require('cors');
const { urlencoded } = require('body-parser');

const PORT = process.env.PORT || 3001

const app = express()
//My code goes here
app.use(cors())

app.use(bodyParser.json())

app.use(urlencoded({required: false}))

app.use('/', routes);

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// Code ends here 
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

