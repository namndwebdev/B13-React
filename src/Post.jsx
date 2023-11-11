import { useEffect, useState } from "react"
import { useParams, useSearchParams } from "react-router-dom"
import axios from 'axios'
export default function Post(){
    const param = useParams()  
    const [baiviet, setBaiViet] = useState({})
    // localhost:5173/task/5775?chu=#00000&bg=#ffffff
    const [query, setQuery] = useSearchParams() 
    console.log(query.get('chu'), query.get('bg'));
    useEffect(()=>{
        axios({
            url: `https://backoffice.nodemy.vn/api/tasks/${param.id}?populate=*`,
            method: 'GET'
        })
        .then(res=>{
            console.log(res);
            setBaiViet(res.data.data)
        })
    }, [])

    return (
        <>
            <h1>Bai viet: {baiviet.id}</h1> 
            <h2
                style={{
                    color: query.get('chu'),
                    background: query.get('bg')
                }}
            >{baiviet?.attributes?.title}</h2>
            <h2>{baiviet?.attributes?.createdAt}</h2>

            <button 
                onClick={()=>{
                    setQuery({
                        chu: 'black',
                        bg: 'white'
                    })
                }}
            >Chu Den - Nen Trang</button>
            <button
                onClick={()=>{
                    setQuery({
                        chu: 'red',
                        bg: 'black'
                    })
                }}
            >Chu Do - Nen Den</button>
        </>
    )
}