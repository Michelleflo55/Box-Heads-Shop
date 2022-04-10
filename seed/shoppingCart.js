const db = require('../db')
const {  Shopping} = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  // const items = await Item.find() //finds items in mongo database first 
  
  // const carts = [
  //   {
  //     price: items[0].price + items[1].price + items[2].price,
  //     items:items,
  //   },
  //   {
  //     price: items[0].price,
  //     items:[items[0]._id],
  //   },
  //   {
  //     price: items[1].price,
  //     items:[items[1]._id],
  //   }
  // ]

  const cart = await new Shopping( {
    price: 0,
    items:[]
  }) 

  await cart.save()
  console.log('Created carts with  0 items!')
}
const run = async () => {
  await Shopping.deleteMany()
  await main()
  db.close()
}

run()