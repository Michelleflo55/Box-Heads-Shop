import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Items from './components/Items'
import Item from './components/Item';
import Cart from './components/Cart';
import {useState, useEffect} from 'react'

const App=()=> {
  
  const [cartId, setCartId] = useState('')
  useEffect(() => {
    
   setCartId('62420ae9750567e42d576370');
  }, [] )
  
return (
 <div className='App'>
  
    <main>
      <Routes>
        <Route path='/' element={ <Home setCartId={setCartId} /> } />
        <Route path='/items' element={ <Items />} />
        <Route path='/items/:id' element={ <Item cartId={cartId} />} />
        <Route path='/cart' element={ <Cart cartId={cartId} />} />
      </Routes>

    </main>
      
      
      
 </div>
  );
}

export default App;
