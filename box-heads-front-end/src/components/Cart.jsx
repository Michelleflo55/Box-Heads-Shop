import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CartItem from './CartItem'
import { Link } from 'react-router-dom'



export default function Cart(props) {

    const getCart= async ()=> {
        const res = await axios.get('http://localhost:3001/cart')
        console.log(res.data)
        getItemsInCart(res.data.items)
        setPriceOfCart(res.data.price)
    }
    const [itemsInCart, getItemsInCart] = useState([]) 
    const [priceOfCart, setPriceOfCart] = useState(0)
    useEffect(()=>{
        getCart()
        
    }, [])
        
    //add price to variable
    
    console.log(itemsInCart,'current item in cart')
        
  return (
    <div>
        <div className="font">
          <div className="header">
            <div className="flex">
             <h1 className="homeLink">
              <Link to="/">Home</Link>
             </h1>
             <h1>Cart</h1>
             <h1>
                <Link to="/items">Back to Merch</Link>  
             </h1> 
            </div>
          </div> 
        </div>       
         <div>Price total: {priceOfCart}</div>
        <ul class="flex">
        {itemsInCart.map((item)=>{
            return(
                //total += price
                <li>
                <CartItem {...item}/>
             </li>
            )
        })}
    
        </ul>
       
    </div>
  )
}
//make cart item component and send via prop 
//axios get specific item get to id: 6242096b9ab2c32f5d52f188