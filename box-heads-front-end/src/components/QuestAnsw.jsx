import React, { useEffect } from 'react'
import axios from 'axios'


const QuestAnsw = () => {

  const [answers, setAnswers] = useState([])
npm 
  const getAnswers = async () => {
    const res = await axios.get('http://localhost:3001/')
    console.log(res.data)
    setAnswers(res.data)
  }

useEffect(() => {
  console.log('asnwers from backend')
  getAnswers();
}, [])

return(
  <div>

  </div>
)
}

export default QuestAnsw