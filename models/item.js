const { Schema } = require('mongoose')


const Item = new Schema(
    {
      name: { type: String, required:true }, 
      price: { type: Number, required: true },
      description: { type: String, required: true},
      image: { type: String, required: true}
    },
    {timestamps: true }
)   
    module.exports = Item