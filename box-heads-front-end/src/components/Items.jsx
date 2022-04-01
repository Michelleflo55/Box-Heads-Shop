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
        <div className="font">
            <header>WAW MERCH</header>
            <h1 class="homeLink"><Link to="/">Home</Link> </h1>
               <div class="flex">            
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
        </div>
    )
}

export default Items

