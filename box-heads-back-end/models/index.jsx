const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const ShoppingSchema = require('./Shopping')

const Item = mongoose.model('items', ItemSchema)
const Shopping = mongoose.mode('shopping', ShoppingSchema)

module.exports = {
   Item,
   Shopping
}