
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Item = () => {
    const [ item, setItem ] = useState({})
    
    const {id} = useParams()
        console.log('id:', id)
        
    const getItem = async () => {
        const res = await axios.get(`http://localhost:3001/item/${id}`)
        console.log(res.data[0])
        setItem(res.data[0])
    }
    
    



    useEffect(() => {
        console.log('hello')
       getItem();
    }, [] )

    return(
        <div>
          <div className="rightItem">
              <h1>
                <Link to="/items">Back to Merch</Link>  
              </h1>
              <h1>
                <Link to="/">Home</Link>
              </h1>
              <h1>
                <button onClick={''}>Add to Cart</button>
              </h1>
          </div>  
          <div className='leftItem'>
             <h2>{item.name}</h2>
             <h3>{item.price} Eth</h3>
             <h3>{item.description}</h3>
             <img src={item.image} />
            </div> 
          
        </div>
    )

}
export default Item

