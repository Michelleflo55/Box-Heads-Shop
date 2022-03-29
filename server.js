const { urlencoded } = require('body-parser');
const express = require('express');
const db = require('./db');

const {Item, Shopping } = require('./models');

const PORT = process.env.PORT || 3001

const app = express()

//My code goes here
app.use(urlencoded({require: false}))
app.use(express.static(`${__dirname}/client/build`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.use(express.json())

app.get('/shop', async (request, response) => {
  
    const items = await Item.find({})
   
  response.json(items)

});

app.post('/cart', async(request, response)=> {
    console.log(request.body.id)
  const itemAdded = await Item.findById(request.body.id)
    let newCart = await Shopping.create({
        price:30
    })
    newCart.items.push(itemAdded)
    newCart.save()
   response.send(newCart)    

})
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
// Code ends here 
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

