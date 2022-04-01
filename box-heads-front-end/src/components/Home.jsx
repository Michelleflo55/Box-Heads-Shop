import axios from 'axios'
import { Link } from 'react-router-dom'
import {useEffect} from 'react'

function Home(props) {
  //when shop Button is clicked, create new cart & save to app.js state
  //state on app.js that is for the cart id
 
  //then  navigate to items react router dom nav function

  //function post to your cart axios.post
  //listen for response
//write post and consolelog the response 
    const saveCart = async () => {
        const res = await axios.post('http://localhost:3001/cart')
        props.setCartId(res.data._id)
    }
    useEffect(() => {
     saveCart();
    }, []) 
  
  return (
    <div className="font">
      <header>Welcome</header>
      <div className="flex">
          <div className="left-column">
              <h1 className='nft'>Learn about NFTS</h1>   
          </div>
          <div className="middle-column">
              <img src="https://i.ibb.co/QPDK3VD/LOGO.png" className="boxHead" alt="logo"/>
          </div>
          <div className='right-column shop'>
            <h1>
              <Link to="/items" >Shop</Link>
            </h1>
          </div>
      </div>
    </div>
  )
}

export default Home