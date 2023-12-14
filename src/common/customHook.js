import { useState, useEffect } from "react"
import axios from 'axios'

export function useFetch(url){
    const [data, setData] = useState([])
    const [reload, setReload] = useState(false)
    const [paging, setPaging] = useState({
      page: 1,
      pageSize: 5,
      total: 10
    })
    url += `?sort[0]=createdAt:desc&pagination[page]=${paging.page}&pagination[pageSize]=${paging.pageSize}`
    useEffect(()=>{
      
      axios.get(url)
      .then(res=>{
        setData(res?.data?.data)
      })
      .catch(err=>{})
    }, [paging.page, paging.pageSize, reload])   
    
    return [data, setData, paging, setPaging, reload, setReload]
}