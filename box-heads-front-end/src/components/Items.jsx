import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
            <h1><Link to="/">Home</Link> </h1>
            <h1>WAW MERCH</h1>
            {items.map((item)=>(
               <div> 
                 <h1>{item.name}</h1>
                    <div> 
                       <Link to={`/items/${item._id}`}>  
                        <img src={item.image} />
                        </Link>  
                    </div>
                </div>
            ))}
            
        </div>
    )
}

export default Items

