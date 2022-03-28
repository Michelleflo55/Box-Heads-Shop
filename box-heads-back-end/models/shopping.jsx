const { Schema } = require('mongoose')

const Shopping = new Schema(
    {
        id: { type: Number, required:true },
        price: {type: Number, required: true},
        Item: { type: Number, required: true}
    },
    { timestamps: true }
)

module.exports = Shopping