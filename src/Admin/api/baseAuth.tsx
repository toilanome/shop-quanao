import axios from "axios";

const baseAuth = axios.create({
    baseURL : 'http://localhost:9090/api/auth'
})
export default baseAuth