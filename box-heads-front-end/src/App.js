import './App.css';
// import React, {useState, useEffect} from 'react';
// import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
// import { useNavigate } from 'react-router-dom';
import Items from './components/Items'

const App=()=> {
  
  
  
  
return (
 <div className='App'>
  
    <main>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/items' element={ <Items />} />
      </Routes>

    </main>
      
      
      
 </div>
  );
}

export default App;
