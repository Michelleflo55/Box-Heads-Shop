const db = require('../db')
 const { Item } = require('../models/index')

 db.on('error', console.error.bind(console, 'MongoDB connection error:'))

 const main = async () => {
     const item = {
         name:'WAW Shirt',
         price:.0089,
         description:'Boxing Tee with WAW #2852',
         image:'https://i.ibb.co/wrBhdnY/WAW-T-Shirt.png'
     }
     await Item.insertOne(item) 
     console.log('Created item!')
 }
 const run = async () => {  
    await main()
    db.close()
  }
  

 run() 