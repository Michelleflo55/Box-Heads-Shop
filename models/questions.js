const { Schema } = require('mongoose')

const Questions = new Schema(
    {
        question: { type: String, required:true }
    },
    {timestamps: true}
)
module.exports = Questions