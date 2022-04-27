import axios from 'axios'
import { Link } from 'react-router-dom'


function Home(props) {
  
  
  return (
    <div className="font">
     <header>Welcome</header>
      <div className="flex">
      
          <div className="left-column">
            <h1 className='nft'>Learn about NFTS</h1> 
            <h5>More info coming soon!</h5>
          </div>
          <div className="middle-column">
              <img src="https://i.ibb.co/QPDK3VD/LOGO.png" className="boxHead " alt="logo"/>
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