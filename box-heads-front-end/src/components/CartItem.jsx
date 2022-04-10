import React from 'react'

export default function CartItem(props) {
    
  
  
  return(
      <li className="itemCarted" id={props.name}>
          <h3>Item: {props.name}</h3>
          <h3>Price: {props.price}</h3>
          <img src={props.image} alt='image' />
      </li>
    )



  return (
    <div>CartItem</div>
  )
}
