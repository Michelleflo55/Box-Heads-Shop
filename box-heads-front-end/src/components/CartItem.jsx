import axios from 'axios'
import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'

export default function CartItem(props) {
 
  
  return(
    <div>
      <div class="Item" id={props.name}>
            <h2>Item: {props.name}</h2>
            <img className="items-images items-image " src={props.image} alt='image' />
      </div>
     
     </div>
    )

}
