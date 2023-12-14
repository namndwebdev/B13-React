import './App.css'
import { useFetch } from './common/customHook'
import { Link } from 'react-router-dom'
import {deleteTask} from './services/task'
function App() {
  const [data, setData, paging, setPaging, reload, setReload] = useFetch('/api/tasks')
  async function handleDelete(id){
    try {
      await deleteTask(id)
      setReload(!reload)
    } catch (error) {
      console.log(error);
      alert('khong the xoa')
    }
  }
  return (
    <>
      {data?.map(item=>{
        return <Link key={item?.id} to={`/${item?.id}`}>
          <h1>
            {item?.id}
            <button onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
              handleDelete(item?.id)
            }}>Xoa</button>
          </h1>
        </Link>
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
