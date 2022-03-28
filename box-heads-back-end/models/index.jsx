const mongoose = require('mongoose')
const ItemSchema = require('./Item')
const ShoppingCartSchema = require('./ShoppingCart')

const Item = mongoose.model('items', ItemSchema)
const ShoppingCart = mongoose.mode('shopping', ShoppingCartSchema)

module.exports = {
   Item,
   ShoppingCart
}