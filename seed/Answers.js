const db = require('../db')
const { Answers } = require('../models/answers')

db.on('error', console.error.bind(console, 'MongoDB connection error'))

const main = async () => {
    const answers = [
        {
            answer: 'An NFT is a digital asset that represents real-world objects like art, music, in-game items and videos. They are bought and sold online with cryptocurrency.'
        },
        {
            answer: 'WAW #2852 is one nft from the ten thousand Women and Weapons collection created by the talented Artist Sara Baumann. Being a collector of the WAW collection comes with perks and utilities. Owning the IP rights (intellectual property) is one of the perks included. This led to the fruition of Box Heads e-commerce shop by Michelle Flores. As an amateur boxer with a passion for collecting women-empowering nfts, she envisioned a site that merged both her passions.'
        },
        {
            answer: 'The goal for Box Heads is to bring as many boxers and boxing fans into the Web3 world while providing cool merch and nft knowledge. But it doesn’t stop there! With the purchase of each item, 5% of each sale will go towards programs that will help expand opportunities for women-boxers.'
        }
    ]
    await Answers.insertMany(answers)
    console.log('created answers')
}
const run = async () => {
    await deleteMany()
    await main()
}
run()
