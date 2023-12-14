import { useState } from 'react'
import {login} from '../services/login'

export default function Login(){
    const [info, setInfo] = useState({})

    function handleChange(e){
        setInfo({
            ...info,
            [e.target.name]: e.target.value.trim()
        })
    }

    return (
        <>
            <form>
                <label htmlFor="">email</label>
                <input type="text" name="email" onChange={handleChange}/>
                <label htmlFor="">password</label>
                <input type="password" name="password" onChange={handleChange}/>
                <button type="button" onClick={async ()=>{
                    try {
                        let res = await login(info.email, info.password)
                        localStorage.setItem('token', res.data.jwt)
                        localStorage.setItem('user', JSON.stringify(res.data.user))
                    } catch (error) {
                        alert('khong dang nhap dc')
                    }
                }}>Dang nhap</button>
            </form>
        </>
    )
}