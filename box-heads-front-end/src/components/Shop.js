function App() {
    const getItems = async () => {
      let items = await axios.get('http://localhost:3001/shop')
      console.log(items)
    }
  
    useEffect(()=>{
      getItems()
    },[])
  