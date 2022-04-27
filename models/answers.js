const { Schema }= require('mongoose')

const Answers = new Schema(
    {
        answer: {type: String, required:true}
    },
    { timestamps: true} 
)

module.exports = Answers