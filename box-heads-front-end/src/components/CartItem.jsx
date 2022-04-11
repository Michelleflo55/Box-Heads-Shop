import React from 'react'

export default function CartItem(props) {
    
  
  
  return(
    <div>
      <div class="flexItems" id={props.name}>
            <h2>Item: {props.name}</h2>
            <h3>Price: {props.price}</h3>
            <img src={props.image} alt='image' />
      </div>
      <div>
      <button class="block">Remove Item</button>
      </div>
     </div>
    )

}
