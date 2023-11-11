import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Add(){
    const [task, setTask] = useState({
        title: ''
    })
    const nav = useNavigate()
    function handleChange(e){
        let key = e.target.getAttribute('name')
        setTask({...task, [key]: e.target.value})
    }
    function handleAddNew(){
        axios({
            url: 'https://backoffice.nodemy.vn/api/tasks',
            method: 'POST',
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            },
            data: {
                data: task
            }
        })
        .then(res=>{
            nav('/')
        })
        .catch(err=>{
            alert('Khong thanh cong')
        })
    }
    return (
        <>
            Add New
            
            <form>
                <input type="text" name="title" onChange={handleChange}/>
                <button onClick={handleAddNew} type="button">Them moi</button>
            </form>
        </>
    )
}