const db = require('../db')
const {  Shopping} = require('../models')


db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {


  const cart = await new Shopping( {
    price: 0,
    items:[]
  }) 

  await cart.save()
  console.log('Created carts with  0 items!')
}
const run = async () => {
  await Shopping.deleteMany()
  await Shopping.deleteOne()
  await main()
  db.close()
}

run()