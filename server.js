const express = require('express');
const db = require('./db');

const {Item, Shopping } = require('./models');

const PORT = process.env.PORT || 3001

const app = express()
//My code goes here


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.use(express.json())

app.get('/shop', async (request, response) => {
  
    const items = await Item.find({})
   
  response.json(items)

})

app.post('/cart', (request, response)=> {
      console.log('we are in the carts')
})

// Code ends here 
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

