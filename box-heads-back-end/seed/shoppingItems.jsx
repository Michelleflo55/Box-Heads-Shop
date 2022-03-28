 const db = require('../db')
 const { Item, ShoppingCart} = require('../models')

//line 5 connects to database  
 db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// const createShoppingCart = async () => {
//     const cart = [
//         {
//             id: 
//         }
//     ]
// }

 run() 