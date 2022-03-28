const { Schema } = require('mongoose')

const ShoppingCart = new Schema(
    {
        id: { type: Number, required:true },
        price: {type: Number, required: true},
        Item: { type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = ShoppingCart