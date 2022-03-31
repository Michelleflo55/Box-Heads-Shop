// import Items from './Items'
import { Link } from 'react-router-dom'

function Home() {

 
  

  return (
    <div className="flex-container">
        <div className="left-column">
            <h1 className='nft'>Learn about NFTS</h1>   
        </div>
        <div className="middle-column">
            <img src="https://i.ibb.co/QPDK3VD/LOGO.png" className="boxHead" alt="logo"/>
        </div>
        <div className='right-column shop'>
          <Link to="/items">Items</Link>
          {/* <Items items={ Items} /> */}
        </div>
    </div>
  )
}

export default Home