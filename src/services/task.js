import axios from "axios";


export async function createTask(task){
    let token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTYxLCJpYXQiOjE3MDE5NDMwNTYsImV4cCI6MTcwNDUzNTA1Nn0.AQeQMlcTqOlFo43O6_rQveDJx-HNzTIs9g1-PTQLytI'

    axios.post('https://backoffice.nodemy.vn/api/tasks', {
        data: task
    } , {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}