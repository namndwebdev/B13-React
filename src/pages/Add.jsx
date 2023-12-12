import { useState } from "react"
import { useNavigate } from "react-router"
import { createTask } from "../services/task"

export default function AddTask(){
    const nav = useNavigate()
    const [task, setTask] = useState({
        title: '',
        complete: false
    })

    function handChange(e){
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })
    }

    function handChangeCheckBox(e){
        setTask({
            ...task,
            [e.target.name]: e.target.checked
        })
    }

    function validate(data){
        if(!data.title){
            return false
        }
        
        if(data.title.length < 3 || data.title.length > 100){
            return false
        }

        return true
    }

    return (
        <>
            <form>
                <input type="text" name="title" onChange={handChange}/>
                <input type="checkbox" name="complete" onChange={handChangeCheckBox}/>
                <button type="button" onClick={async ()=>{
                    let isValid = validate(task)
                    if(isValid){
                        try {
                            await createTask(task)
                            nav('/')
                        } catch (error) {
                            alert('tao khong thanh cong')
                        }
                    }else{
                        alert('Du lieu k hop le')
                    }
                }}>Add New</button>
            </form>
        </>
    )
}