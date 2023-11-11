import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
export default function DetailTask(){
    const [task, setTask] = useState({})
    const param = useParams()
    useEffect(()=>{
        axios({
            url: `https://backoffice.nodemy.vn/api/tasks/${param.id}`
        })
        .then(res=>{
            setTask(res.data.data)
        })
        .catch(err=>{

        })
    }, [])

    function onChange(e){
        let key = e.target.getAttribute('name')
        let newTask = {...task}
        newTask.attributes[key] = e.target.value
        setTask(newTask)

    }

    function handleUpdate(){
        let dataUpdate = task.attributes
        dataUpdate.id = task.id
        axios({
            url: `https://backoffice.nodemy.vn/api/tasks/${dataUpdate.id}`,
            method: 'PUT',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                data: dataUpdate
            }
        }).then(res=>{
            alert('update thanh cong')
        })
    }

    return (
        <>
            <h1>Task chi tiet {param.id}</h1>
            <div><input type="text" name='title' value={task?.attributes?.title} onChange={onChange}/></div>
            <div><input type="text" name='complete' value={task?.attributes?.complete} onChange={onChange}/></div>
            <button onClick={handleUpdate}>Update</button>
        </>
    )
}