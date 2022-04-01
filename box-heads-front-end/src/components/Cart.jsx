import { useState, useEffect } from 'react'
import axios from 'axios'


const Cart = (props) => {
    const [cart, setCart ] = useState()
    const getCart = async () =>{
        const res = await axios.put((`http://localhost:3001/cart/${props.cartId}`, itemToAdd))
        console.log(res.data)
        setCart(res.data)
    }
    
   useEffect(() =>{
       getCart();
   })

    
    return(
        <div>
            Hello
        </div>
    )

}
export default Cart