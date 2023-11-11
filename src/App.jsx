import { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function App(props){
  const [data, setData] = useState([])
  useEffect(()=>{
      axios({
        url: 'https://backoffice.nodemy.vn/api/tasks?sort[0]=createdAt:desc'
      }).then(res=>{
        setData(res.data.data)
      })
      .catch(err=>{

      })
  }, [])

  return (
      <>
        <Link to='/add'>Them Task Moi</Link>
        {
          data.map(item=>{
            return <Link key={item?.id} to={`/${item?.id}`}>
              <h1>{item?.attributes?.title}</h1>
            </Link>
          })
        }
      </>
  )
}

export default App
