import { useEffect, useState } from "react"
import axios from 'axios'
import {List, Avatar} from 'antd'

export default function TaskList(){
    const [list, setList] = useState([])

    useEffect(()=>{
        axios({
            url: 'https://backoffice.nodemy.vn/api/tasks',
            method: 'GET'
        })
        .then(res=>{
            console.log(res.data.data);
            setList(res.data.data)
        })
        .catch(err=>{

        })

    }, [])


    return (
        <>
            <h1>Task List Danh Sach cong viec</h1>
            <List
                itemLayout="horizontal"
                dataSource={list}
                renderItem={(item, index) => (
                <List.Item>
                    <List.Item.Meta
                    avatar={<Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />}
                    title={<h4>{item?.id}</h4>}
                    description={item?.attributes?.title}
                    />
                </List.Item>
                )}
            />
        </>
    )
}