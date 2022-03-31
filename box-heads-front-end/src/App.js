import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Questions from './components/Questions'
import Answers from './components/Answers';
import { useNavigate } from 'react-router-dom';

const App=()=> {
  const [items, setItems] = useState([])

  const getItems = async () => {
    let items = await axios.get('http://localhost:3000/shop')
    console.log(items)
    setItems()
  }
  useEffect(()=>{
    getItems()
  },[])
  
  
return (
 <div className='App'>
  <header>
    
  </header>
    <main>
      <Routes>
        <Route path='/' element={ <Home /> } />
    
      </Routes>

    </main>
      
      
      
 </div>
  );
}

export default App;
