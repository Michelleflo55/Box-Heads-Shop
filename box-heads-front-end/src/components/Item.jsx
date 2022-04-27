
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'


const Item = (props) => {
    const [ item, setItem ] = useState({})
    const [newItem, setNewItem] = useState({
      name:''
    })
    const {id} = useParams()
        console.log('id:', id)
        
    const getItem = async () => {
        const res = await axios.get((`http://localhost:3001/item/${id}`))
        console.log(res.data[0])
        setItem(res.data[0])
    }

    //put
    const updateCart = async () => {
     

      const res = await axios.put(`http://localhost:3001/cart/${item._id}`)
      console.log(res,'response from updated cart')
    }
    const updateItem = async ()=>{
      const res = await axios.put(`http://localhost:3001/item/${id}`, newItem)
    }
    const updateName = (e) =>{ 
      setNewItem({ ...newItem, name: e.target.value })
    }

    useEffect(() => {
        console.log('hello')
       getItem();
    }, [] )

    return(
        <div className="font">
          <div className="">
              <div className="item-header">
                <h1 className="homeLink">
                  <Link to="/">Home</Link>
                </h1>
                <h1>
                  <Link to="/items">Back to Merch</Link>  
                </h1>
                <h1><Link to={`/cart/${id}`}>View Cart</Link></h1>  
                <h1>
                  <button onClick={updateCart} class="button block">Add to Cart</button>
                  
                </h1>
              </div> 
           </div>      
          <div className='Item'>
             <h2>{item.name}</h2>
             <h3>{item.price} Eth</h3>
             <h3 >{item.description}</h3>
             <img className="items-images items-image "src={item.image} />
            </div>
           
            <form class="center block">
            <h1>Update  {item.name} and give it a cool WAW name!</h1>
              <input  value={newItem.name} placeholder='enter new name' onChange={updateName} />
              <button onClick={updateItem} class="button">Update Item Name</button>
            </form> 
            
          </div>
    )

}
export default Item

