import { useState } from "react"
import { useParams } from "react-router-dom"
import { useFetch } from "../common/customHook"
import {updateTask} from '../services/task'
export default function DetailTask(){
    const params = useParams()

    const [data, setData] = useFetch(`/api/tasks/${params.idTask}`)
   
    const handleInput = (e)=>{

        let newAttribute = {
            ...data.attributes,
            [e.target.name]: e.target.value
        }

        data.attributes = newAttribute
        setData({...data})
      
    }

    const handleCheckbox = (e)=>{
        let newAttribute = {
            ...data.attributes,
            [e.target.name]: e.target.checked
        }
        setData({
            ...data, 
            attributes: newAttribute
        })
    }

    async function handleUpdate(){
        try {
            let dataDeLuu = {
                data: data.attributes
            }
    
            await updateTask(data.id, dataDeLuu)
            alert('Da thanh cong')
        } catch (error) {
            alert('da co loi xay ra')
        }
    }

    function convertToYYYYMMDD(txt){
        const currentDate = new Date(txt);

        // Get the year, month, and day
        const year = currentDate.getFullYear();
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Months are zero-based
        const day = String(currentDate.getDate()).padStart(2, '0');
        
        // Format the date as "YYYY MM DD"
        const formattedDate = `${year}-${month}-${day}`;
        
        return formattedDate
    }

    return (
        <>  
            <h1>Title: <input type="text" value={data?.attributes?.title} name="title" onChange={handleInput} /></h1>
            <h1>Deadline: <input type="date" value={convertToYYYYMMDD(data?.attributes?.date)} name="date" onChange={handleInput} /></h1>
            <h1>Trang thai: 
                <input type="checkbox" name="complete" onChange={handleCheckbox} checked={data?.attributes?.complete}/>
            </h1>
        
            <button onClick={handleUpdate}>Save</button>
        </>
    )
}