const mongoose = require('mongoose')
const ItemSchema = require('./item')
const ShoppingSchema = require('./shopping')

const Item = mongoose.model('items', ItemSchema)
const Shopping = mongoose.model('shopping', ShoppingSchema)

module.exports = {
   Item,
   Shopping
}