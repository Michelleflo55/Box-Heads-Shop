import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export default function CartItem(props) {
  const [removeItem, setRemoveItem] = useState()
  
  const Delete = async () => {
    const {id} = useParams()
    console.log(removeItem, "item has been deleted")
    const res = await axios.delete(`http://localhost:3001/cart/${id}`, removeItem)
    setRemoveItem(res)
  }
  


  useEffect(()=>{
    setRemoveItem();
  }, [])
  return(
    <div>
      <div class="flexItems" id={props.name}>
            <h2>Item: {props.name}</h2>
            <h3>Price: {props.price}</h3>
            <img src={props.image} alt='image' />
      </div>
      <div>
      <button class="block" onClick={Delete}>Remove Item</button>
      </div>
     </div>
    )

}
