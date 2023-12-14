import './App.css'
import { useFetch } from './common/customHook'
import { Link } from 'react-router-dom'
import {deleteTask} from './services/task'
import { memo } from 'react'
async function handleDelete(id, cb){
  try {
    await deleteTask(id)
    cb()
  } catch (error) {
    console.log(error);
    alert('khong the xoa')
  }
}
const TaskElement = memo(function(props){
  let item = props.item
  console.log('render', item?.id);
  return <Link  to={`/${item?.id}`}>
  <h1>
    {item?.id}
    <button onClick={(e)=>{
      e.preventDefault()
      e.stopPropagation()
      handleDelete(item?.id, props.afterDelete)
      
    }}>Xoa</button>
  </h1>
</Link>
}, function(oldProps, newProps){
  return oldProps.item.id == newProps.item.id
})

function App() {

  const [data, setData, paging, setPaging, reload, setReload] = useFetch('https://backoffice.nodemy.vn/api/tasks')
  
  return (
    <>
      {data?.map(item=>{
        return <TaskElement 
          key={item?.id} 
          item={item}
          afterDelete={()=>{
            setReload(current=>{ return !current })
          }}
        />
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
