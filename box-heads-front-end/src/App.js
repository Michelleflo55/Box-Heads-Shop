import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Items from './components/Items'
import Item from './components/Item';

const App=()=> {
  
  
  
  
return (
 <div className='App'>
  
    <main>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/items' element={ <Items />} />
        <Route path='/items/:id' element={ <Item />} />
      </Routes>

    </main>
      
      
      
 </div>
  );
}

export default App;
