import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Items = () => {
    
    const [ items, setItems ] = useState([])
    const [addItem, setAddItem] = useState({
        name:'',
        price: 0.25,
        description: '',
        image:'',
        item:''
    })

    const postItem = async () => {
        console.log(addItem, 'post method works')
        const res = await axios.post('http://localhost:3001/item', addItem)
        setAddItem(res.data)
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
      const postItemText = (e) =>{ 
        setAddItem({ ...addItem, item: e.target.value })
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
            <div class="center">
            <h1>
              Want your own NFT Merch? 
            </h1>
            <h3>Add your NFT info below to purchase</h3>  
             <input  value={addItem.name}    placeholder='Nft Name' onChange={postName} />
             <input value={addItem.description} placeholder='NFT description' onChange={postDescription} />
             <input value={addItem.image}  placeholder='NFT image' onChange={postImage} />
             <h3>Chose your item below:</h3>  
             <h3>Shirt, Mug, Boxing gloves</h3>  
             <input value={addItem.item} placeholder='merch option' onChange={postItemText} />
             <button onClick={postItem} class="block">Submit my NFT</button>
            <h4>Once submitted, your NFT will appear in our WAW Gallery below!</h4> 
            </div>
           <div class="flexItems">            
             {items.map((item)=>(
           <div> 
           <h1>{item.name}</h1>
           <div class> 
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

