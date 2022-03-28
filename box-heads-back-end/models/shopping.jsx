const { Schema } = require('mongoose')

const Shopping = new Schema(
    {
        price: {type: Number, required: true},
        Item: { type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = Shopping