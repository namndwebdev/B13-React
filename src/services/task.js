import axios from "axios";
const BASE_URL = import.meta.env.VITE_BASE_URL

export async function createTask(task){
    let token = localStorage.getItem('token')

    axios.post(`/api/tasks`, {
        data: task
    } , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}

export async function updateTask(id, newData){
    let token = localStorage.getItem('token')

    return axios.put(`/api/tasks/${id}`, newData , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
} 

export async function deleteTask(id){
    let token = localStorage.getItem('token')

    return axios.delete(`/api/tasks/${id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
} 