import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Items = () => {
    
    const [ items, setItems ] = useState([])
    const [addItem, setAddItem] = useState({
        name:'',
        price: 0.25,
        description: '',
        image:''
    })

    const postItem = async () => {
        console.log(addItem, 'post method works')
        const res = await axios.post('http://localhost:3001/item', addItem)
    }
    const postName = (e) =>{ 
        setAddItem({ ...addItem, name: e.target.value })
      }
    const postDescription = (e) =>{ 
        setAddItem({ ...addItem, description: e.target.value })
      }  
    const postImage = (e) =>{ 
        setAddItem({ ...addItem, image: e.target.value })
      }
    const getAllItems = async () => {
        const res = await axios.get('http://localhost:3001/items')
        console.log(res.data)
        setItems(res.data)
    }

    useEffect(() => {
        console.log('got items from backend')
       getAllItems();
    
       
    }, [])  


    return (
        <div className="font">
            <header>WAW MERCH</header>
            <h1 class="homeLink"><Link to="/">Home</Link> </h1>
             <input  value={addItem.name}    placeholder='Nft Name' onChange={postName} />
             <input value={addItem.description} placeholder='NFT description' onChange={postDescription} />
             <input value={addItem.image}  placeholder='NFT image' onChange={postImage} />
             <button onClick={postItem}>Buy my NFT Merch</button>
           <div class="">            
             {items.map((item)=>(
           <div> 
           <h1>{item.name}</h1>
           <div> 
            <Link to={`/items/${item._id}`}>  
             <img src={item.image} />
            </Link>  
            </div>
                           
            </div>
            ))}
           </div> 
        </div>
    )
}

export default Items

