const { Schema } = require('mongoose')

const Shopping = new Schema(
    {
        price: {type: Number, required: true},
        items: [{ type:Object}]
    },
    { timestamps: true }
)

module.exports = Shopping