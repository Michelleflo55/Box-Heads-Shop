const db = require('../db')
const { Questions } = require('../models/questions')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const questions = [
        {
            question: 'What is an NFT:'
        },
        {
            question: 'What is WAW #2852:'
        },
        {
            question: 'What is Box-Heads goal:'
        }
    ]
    await Questions.insertMany(questions)
    console.log('created questions')
}
const run = async () => {
    await Questions.deleteMany()
    await main()
}
run()
