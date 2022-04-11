const { urlencoded } = require('body-parser');
const express = require('express');
const db = require('./db');
const cors = require('cors')
const {Item, Shopping } = require('./models');
const res = require('express/lib/response');

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

app.put('/item/:id', async (req, res)=>{
  const id= req.params.id
  const updateItem= req.body
  console.log(updateItem, 'updated item name')
  const item = await Item.findByIdAndUpdate(id, {name: updateItem.name, price: updateItem.price})
  res.json(item)

})


app.post('/item', async(request, response)=> {
  const item = await Item.create(request.body)
  await item.save()
  return response.json(item)
})

//deletes item
// app.delete('item/:id', async(req,res)=>{
//  try {
//   const {id}= req.params.id;
//   const deleted= await Item.findByIdAndDelete({id})
//   if(deleted) {
//     return res.status(200).send("item has been deleted");
//   }
//   throw new Error("item not found")
//  } catch (error) {
//   return res.status(500).send(error.message);
//  }
// })

app.delete('/cart/:id', async(req, res)=>{
  try {
    const {id} = req.params.id
    const deletedItem = await Item.deleteOne({id})
    res.json(deletedItem, 'item has been deleted')
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

//adds items to single cart
app.put('/cart/:id', async(request, response)=> {
   try {
      const id = request.params.id
      const item = await Item.findById(id)
      const cart = await Shopping.findOne()
         cart.items = [...cart.items, item]
         cart.price += item.price
        await cart.save()
        response.json(cart)
    } catch (error) {
      response.send('error')
    }
})

//create get request for cart
app.get('/cart', async(request, response) => {
  console.log(request.params)
  const cart = await Shopping.findOne()
  console.log(cart, 'cart in backend')
  // cart[0].items.push(request.body.id)  
  // console.log(cart.items, 'item in cart')
response.json(cart)
});




app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
 })
// Code ends here 
app.listen(PORT, () => console.log(`Server Listening on port: ${PORT}`))

//to reset items node seed/items.js
//node seed/shoppingCart.js