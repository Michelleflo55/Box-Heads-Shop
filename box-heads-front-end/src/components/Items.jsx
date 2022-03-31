import React from 'react'
import { useState, useEffect } from 'react'

import axios from 'axios'

const Items = () => {
    
    const [ items, setItems ] = useState([])
    
    const getAllItems = async () => {
        const res = await axios.get('http://localhost:3001/items')
        console.log(res.data)
        setItems(res.data)
    }

    useEffect(() => {
        console.log('hello')
       getAllItems();
    }, [])  

   

    return (
        <div>
            <h2>Items</h2>
            {items.map((item)=>(
                <h1>{item.name}</h1>
            ))}
            {items.map((item)=>(
                <h1>{item.price}</h1>
            ))}
        </div>
    )
}

export default Items