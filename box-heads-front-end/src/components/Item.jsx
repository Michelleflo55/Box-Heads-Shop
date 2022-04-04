
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Item = (props) => {
    const [ item, setItem ] = useState({})
    
    const {id} = useParams()
        console.log('id:', id)
        
    const getItem = async () => {
        const res = await axios.get((`http://localhost:3001/item/${id}`))
        console.log(res.data[0])
        setItem(res.data[0])
    }

    //put
    const updateCart = async () => {
      let itemToAdd = {
        'id':item._id, 
        'name':item.name
      }

      const res = await axios.put('http://localhost:3001/cart')
      console.log(res)
    }

    useEffect(() => {
        console.log('hello')
       getItem();
    }, [] )

    return(
        <div className="font">
          <div className="header">
              <div className="flex">
                <h1 className="homeLink">
                  <Link to="/">Home</Link>
                </h1>
                <h1>
                  <Link to="/items">Back to Merch</Link>  
                </h1>
                <h1>
                  <Link to="/cart/:id">View Cart</Link>
                  </h1>  
                <h1>
                  <button onClick={updateCart} class="block">Add to Cart</button>
                </h1>
              </div> 
            </div>      
          <div className='Item'>
             <h2>{item.name}</h2>
             <h3>{item.price} Eth</h3>
             <h3>{item.description}</h3>
             <img src={item.image} />
            </div> 
          
        </div>
    )

}
export default Item

