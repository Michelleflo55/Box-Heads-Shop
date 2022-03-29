const db = require('../db')
 const { Item } = require('../models/index')

//line 5 connects to database  
 db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const items = [
        {
            name: 'WAW Shirt',
            price: .0089 ,
            description: 'Boxing Tee with WAW #2852',
            image:'https://i.ibb.co/wrBhdnY/WAW-T-Shirt.png'

        },
        {
            name: 'WAW Mug',
            price: .0044,
            description:'Coffee Thermal with WAW #2852',
            image:'https://i.ibb.co/MNdcpd3/WAW-MUG.png'
        },
        {
            name: 'WAW Gloves',
            price: .15,
            description:'Winning Gloves with WAW #2852',
            image:'https://i.ibb.co/jrNcDgM/WAW-Gloves.png'
        },
    ]
    await Item.insertMany(items) //the line that's actually being run on database insertMany will bring 2 objects from publishers
  console.log('Created items!')
}
const run = async () => {       //call function main from line 9
    await main() //we want this function to completely finish beffore we start db.close 
    db.close()
  }
  

 run() 

 //like publishers
