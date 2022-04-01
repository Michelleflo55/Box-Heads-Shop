const { urlencoded } = require('body-parser');
const express = require('express');
const db = require('./db');
const cors = require('cors')
const {Item, Shopping } = require('./models');

const PORT = process.env.PORT || 3001

const app = express()

//My code goes here
app.use(cors()) 
app.use(express.json())
app.use(urlencoded({require: false}))
app.use(express.static(`${__dirname}/client/build`))

db.on('error', console.error.bind(console, 'MongoDB connection error:'))



app.get('/item/:id', async (request, response) => {
  console.log(request.params)
  const item = await Item.find({_id:request.params.id})
    console.log(item)
response.json(item)

});

app.get('/items', async (request, response) => {
  
    const items = await Item.find({})
   
  response.json(items)

});




app.post('/cart', async(request, response)=> {
    console.log(request.body)
    const cart = await Shopping.create({'price':0})
    cart.save()
    console.log(cart)
    response.send(cart)
})

app.put('/cart/:id', async(request, response)=> {
    const cart= await Shopping.find({_id:request.params.id})
    cart[0].items.push(request.body.id)
    cart[0].save()
    response.send(cart[0])
})


//create get request
app.get('/cart/:id', async (request, response) => {
  console.log(request.params)
  const cart = await Shopping.find({_id:request.params.id})
  cart[0].items.push(request.body.id)  
  console.log(cart)
response.json(cart[0])

});


app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
// Code ends here 
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

