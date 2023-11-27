import axios from "axios";

const axiosConst = axios.create({
    baseURL: 'http://localhost:8080/CRUDRepo',
    withCredentials: true
})

export default axiosConst;