import {
    Button,
    Form,
    Input
} from 'antd'

import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Login(){
    const nav = useNavigate()
    function onFinish(values){
        axios({
            url: '/auth/local',
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            data : values
        })
        .then(res=>{
            localStorage.setItem('token', res.data.jwt)
            localStorage.setItem('user', JSON.stringify(res.data.user))
            nav('/')
        })
        .catch(err=>{
            console.log('err', err);
        })
    }

    return (
        <>
            <Form
                style={{width: 300, margin: '0 auto'}}
                onFinish={onFinish}
            >
                <Form.Item name="identifier" label='Username'>
                    <Input></Input>
                </Form.Item>

                <Form.Item name="password" label='Password'>
                    <Input.Password></Input.Password>
                </Form.Item>

                <Button type='primary' htmlType='submit'>Dang nhap</Button>
            </Form>
        </>
    )
}