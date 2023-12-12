import { useParams } from "react-router-dom"
import { useFetch } from "../common/customHook"

export default function DetailTask(){
    const params = useParams()

    const [data, setData] = useFetch(`https://backoffice.nodemy.vn/api/tasks/${params.idTask}`)

    return (
        <>
            <h1>Title: {data?.attributes?.title}</h1>
        </>
    )
}