import './App.css';
import axios from 'axios'
import {useEffect} from 'react'


function App() {
  const getItems = async () => {
    let items = await axios.get('http://localhost:3001/shop')
    console.log(items)
  }

  useEffect(()=>{
    getItems()
  },[])
  
  
  return (
    <div>
      <div className='flex-container'>
        <h1 className='nft'>
          Learn about NFTS
        </h1>
        <img src="https://i.ibb.co/QPDK3VD/LOGO.png" className="boxHead" alt="logo"/>
       <h1 className='shop'>Shop</h1>
      </div>
      
    </div>
  );
}

export default App;
