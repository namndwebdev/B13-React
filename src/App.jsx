import './App.css'
import { useFetch } from './common/customHook'
import { Link } from 'react-router-dom'

function App() {
  const [data, setData, paging, setPaging] = useFetch('https://backoffice.nodemy.vn/api/tasks')

  return (
    <>
      {data?.map(item=>{
        return <h1 key={item?.id}>{item?.id}</h1>
      })}

      <button onClick={()=>{
          setPaging({
            ...paging,
            pageSize: paging.pageSize + 5
          })
      }}>Load more</button>
    </>
  )
}

export default App
