import axios from "axios";


const instance  = axios.create({
    // en modo produccion
    baseURL: "https://bobo-cl-back.vercel.app/api",

    // en modo dev
    // baseURL: "http://localhost:8080/api",
    withCredentials: true
})

export default instance