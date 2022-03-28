const mongoose = require('mongoose')
const ItemSchema = require('./item')
const ShoppingSchema = require('./shopping')

const Item = mongoose.model('items', ItemSchema)
const Shopping = mongoose.mode('shopping', ShoppingSchema)

module.exports = {
   Item,
   Shopping
}