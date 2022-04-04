import { useState, useEffect } from 'react'
import axios from 'axios'



const Cart = async (props) => {
  


    const res = await axios.get((`http://localhost:3001/cart/}${id}`))
    console.log(res)
  


    return(
        <div>
        Hello
        </div>
    )

}
export default Cart


