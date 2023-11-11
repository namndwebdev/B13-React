import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
export default function Login(){
    const nav = useNavigate()
    const [info, setInfo] = useState({
        email: '',
        password: ''
    })

    function handleChange(e){
        let key = e.target.getAttribute('name')
        setInfo({...info, [key]: e.target.value})
    }

    function handleLogin(){
        axios({
            url: 'https://backoffice.nodemy.vn/api/auth/local',
            method: 'POST',
            data: info
        })
        .then(res=>{
            let token = res.data.jwt
            let user = res.data.user

            localStorage.setItem('token', token)
            localStorage.setItem('user', JSON.stringify(user))
            
            nav('/')
        })
        .catch(err=>{
            console.log(err);
            alert('loi dang nhap')
        })
    }

    return (
        <>
            <form>
                Email: 
                <input type="text" name="identifier"
                    onChange={handleChange}
                />    <br></br>  

                Password: 
                <input type="text" name="password"
                    onChange={handleChange}
                />        <br></br>     
                <button onClick={handleLogin} type='button'>Dang nhap</button>
            </form>
        </>
    )
}