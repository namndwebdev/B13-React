import axios from "axios";

export async function login(email, password){
    return axios.post(`/api/auth/local`, {
        identifier: email,
        password: password
    })
}