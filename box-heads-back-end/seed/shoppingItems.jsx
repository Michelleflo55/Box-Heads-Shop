 const { number } = require('prop-types')
const db = require('../db')
 const { Item, Shopping} = require('../models')

//line 5 connects to database  
 db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const createItems = async () => {
    const items = [
        {
            name: 'WAW Shirt',
            price: '.0089 Eth',
            description: 'Boxing Tee with WAW #2852',
            image:'https://i.ibb.co/wrBhdnY/WAW-T-Shirt.png'

        },
        {
            name: 'WAW Mug',
            price: '.0044 Eth',
            description:'Coffee Thermal with WAW #2852',
            image:'https://i.ibb.co/MNdcpd3/WAW-MUG.png'
        },
        {
            name: 'WAW Gloves',
            price: '.15 Eth',
            description:'Winning Gloves with WAW #2852',
            image:'https://i.ibb.co/jrNcDgM/WAW-Gloves.png'
        },
    ]
}

 run() 