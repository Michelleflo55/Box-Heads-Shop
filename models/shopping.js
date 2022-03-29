const { Schema } = require('mongoose')

const Shopping = new Schema(
    {
        price: {type: Number, required: true},
        items: [{ type: Schema.Types.ObjectId, ref:'items' }]
    },
    { timestamps: true }
)

module.exports = Shopping